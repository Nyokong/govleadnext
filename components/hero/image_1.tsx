import Image from 'next/image';

import * as motion from 'motion/react-client';

export default function Image_1() {
  return (
    <motion.div
      initial={{ scale: 0.6, opacity: 0.8 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{
        duration: 0.2,
        scale: { type: 'spring', visualDuration: 0.2, bounce: 0.2 },
      }}
      className=""
    >
      <div className="w-[95%] mx-[2.5%] flex justify-center items-center mb-4">
        <Image
          className="w-full h-full object-cover "
          src="/bl_1.jpg"
          alt="Image Tab One"
          width={612}
          height={371}
        />
      </div>
    </motion.div>
  );
}
