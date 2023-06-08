import Image from 'next/image';

interface Props {
  src: string | undefined | null;
}

function Avatar({ src }: Props) {
  console.log(src);
  return (
    <Image
      className="rounded-full"
      src={src || '/images/placeholder.jpg'}
      height="30"
      width="30"
      alt="Avatar"
    />
  );
}

export default Avatar;
