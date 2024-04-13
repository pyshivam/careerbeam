import Image from 'next/image';

type IconKHProps = {
  iconName: string;
};
const IconKH = ({ iconName }: IconKHProps) => {
  return (
    <div
      className="rounded-full border-blue-950  hover:bg-blue-950"
      style={{ border: '1px solid #173D7A' }}
    >
      <button
        type="button"
        className="group rounded-full bg-white p-2 hover:bg-blue-950"
      >
        <Image
          alt="mail-icon"
          src={`/assets/icons/${iconName}.svg`}
          className="h-auto w-auto group-hover:invert"
          width={30}
          height={30}
          aria-hidden="true"
        />
      </button>
    </div>
  );
};

export default IconKH;
