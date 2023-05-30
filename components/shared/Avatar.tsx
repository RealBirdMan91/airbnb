import Image from 'next/image';

function Avatar() {
  return (
    <Image
      className="rounded-full"
      src="/images/placeholder.jpg"
      height="30"
      width="30"
      alt="Avatar"
    />
  );
}

export default Avatar;
