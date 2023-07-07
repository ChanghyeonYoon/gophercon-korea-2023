import Image from "next/image";

// DIAMOND

// PLATINUM
import Hyundai from "/public/images/sponsors/platinum/hyundai.png";
// GOLD
import Dreamus from "/public/images/sponsors/gold/dreamus.jpg";
import Karrot from "/public/images/sponsors/gold/karrot.png";
import Megazon from "/public/images/sponsors/gold/megazon.png";

// SILVER
import Openup from "/public/images/sponsors/silver/openup.png";

// BRONZE
import AB180 from "/public/images/sponsors/bronze/ab180.png";
import Onuii from "/public/images/sponsors/bronze/onuii.png";

// COMMUNITY
import Awskrug from "/public/images/sponsors/community/awskrug.png";

// PUBLISHER
import GoldenRabbit from "/public/images/sponsors/publisher/goldenRabbit.png";
import Hanbit from "/public/images/sponsors/publisher/hanbit.png";
import Jpub from "/public/images/sponsors/publisher/jpub.jpeg";

// ETC
import Datadog from "/public/images/sponsors/etc/datadog.png";
import Google from "/public/images/sponsors/etc/google.png";
import Jetbrains from "/public/images/sponsors/etc/jetbrains.png";
import SkCnC from "/public/images/sponsors/etc/skCnC.png";
import Skt from "/public/images/sponsors/etc/skt.png";

const Sponsors = () => {
  return (
    <section className='flex w-screen flex-col gap-4 bg-background px-16 py-16 max-sm:px-4'>
      <p className='mb-12 text-5xl font-extrabold'>Sponsors</p>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>diamond</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center p-4'>
          <Image
            src={Google}
            alt={"Google"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>platinum</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image
            src={Hyundai}
            alt={"Hyundai Motors"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] bg-white object-contain p-2'
          />
          <Image
            src={Datadog}
            alt={"Datadog Motors"}
            width={400}
            height={300}
            className='h-[200px] w-[400px] object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>gold</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image
            src={Dreamus}
            alt={"Dreamus"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] bg-white object-contain p-2'
          />
          <Image
            src={Karrot}
            alt={"Karrot"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] bg-white object-contain p-2'
          />
          <Image
            src={Megazon}
            alt={"Megazon"}
            width={400}
            height={200}
            className='h-[200px] w-[400px] bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>silver</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image
            src={Openup}
            alt={"Openup"}
            width={300}
            height={200}
            className='h-[200px] w-[300px] bg-white object-contain p-2'
          />
          <Image
            src={Jetbrains}
            alt={"Jetbrains"}
            width={300}
            height={200}
            className='h-[200px] w-[300px] bg-white object-contain p-2'
          />
          <Image src={Skt} alt={"Skt"} width={300} height={200} className='h-[200px] w-[300px] object-contain p-2' />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>bronze</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image
            src={AB180}
            alt={"AB180"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
          <Image
            src={Onuii}
            alt={"Onuii"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
          <Image
            src={SkCnC}
            alt={"SkCnC"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>community</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image
            src={Awskrug}
            alt={"Awskrug"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
        </div>
      </div>
      <div className='mb-20'>
        <p className='mb-2 text-3xl font-bold uppercase'>publisher</p>
        <div className='borderGradient mb-4 h-0.5 w-full' />
        <div className='flex w-full justify-center gap-8 p-4 max-sm:flex-col max-sm:items-center'>
          <Image src={GoldenRabbit} alt={"GoldenRabbit"} width={300} height={200} className='h-[150px] w-[300px] p-2' />
          <Image
            src={Hanbit}
            alt={"Hanbit"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
          <Image
            src={Jpub}
            alt={"Jpub"}
            width={300}
            height={200}
            className='h-[150px] w-[300px] bg-white object-contain p-2'
          />
        </div>
      </div>
    </section>
  );
};

export default Sponsors;
