import Mockup from "@/components/atoms/absolute_photos/mockup";
import Shape from "@/components/atoms/absolute_photos/shape";
import CommentTemplate from "@/components/tamplates/comment_template";
import BuyCardTemplate from "@/components/tamplates/buy_card_template";
import Header from "@/components/tamplates/header";
import HeroCard from "@/components/tamplates/hero_card";
import IconCard from "@/components/tamplates/icon_card";
import VideoCard from "@/components/tamplates/video_card";
import Collection from "@/components/tamplates/collection";
import Image from "next/image";
import { WAVES_BG_PATH } from "@/constant/constant";
import WorldMap from "@/components/atoms/world_map/world_map";
import World from "@/components/tamplates/world";
import Market from "@/components/atoms/footer/market";
import Footer from "@/components/tamplates/footer";

export default function Home() {
  return (
    <>
      <div className="relative">
        <Header />
        <HeroCard />
        <IconCard />
        <div className="w-0 h-0 border-l-transparent border-l-[100vw] border-l-solid border-b-solid border-b-[816px] border-b-[#FEF3C7] absolute bottom-0 left-[12px] -z-10" />
      </div>
      <BuyCardTemplate />
      <VideoCard />
      <CommentTemplate />
      <Collection />
      <World />
      <Footer />
    </>
  );
}
