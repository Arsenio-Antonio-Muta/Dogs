// @ts-nocheck
import React from "react"
import FeedPhotosItem from "./FeedPhotosItem"
import useFetch from "../../Hooks/useFetch"
import { PHOTO_GET } from "../../api";
import Error from "../Helper/Error"
import Loading from "../Helper/Loading"
import styles from "./FeedPhoto.module.css"

const FeedPhotos = () => {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function fetchPhotos() {
      const { url, options } = PHOTO_GET({ page: 1, total: 6, user: 0 })
      const { response, json } = await request(url, options)
      console.log(json)
    }
    fetchPhotos()
  }, [request]);

  if (error) return <Error error={error} />
  if (loading) return <Loading />
  if (data)
    return (
      <ul className={`${styles.feed} animeLeft`}>
        {data.map((photo) => (
          <FeedPhotosItem key={photo.id} photo={photo} />
        ))}
      </ul>
    )
  else return null
}

export default FeedPhotos;