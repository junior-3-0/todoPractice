import { useEffect, useState } from 'react'

function useLocalStorage(init, key) {
  const get = () => {
    const storage = JSON.parse(localStorage.getItem(key))
    return storage || init
  }

  const [value, setValue] = useState(get)

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
  }, [value, key])

  return [value, setValue]
}

export default useLocalStorage
