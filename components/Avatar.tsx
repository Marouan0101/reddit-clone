import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

type Props = {
  seed?: string
  large?: boolean
}

const Avatar = ({ seed, large }: Props) => {
  const { data: session } = useSession()

  return (
    <div
      className={`relative h-10 w-10 overflow-hidden rounded-full border border-gray-300 bg-white ${
        large && 'h-20 w-20'
      }`}
    >
      {session?.user?.image ? (
        <Image src={session?.user?.image} layout="fill" />
      ) : (
        <Image
          src={`https://avatars.dicebear.com/api/open-peeps/${
            seed || session?.user?.name || 'placeholder'
          }.svg`}
          layout="fill"
        />
      )}
    </div>
  )
}

export default Avatar
