"use client";

import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import style from "./followRecommend.module.css";

export default function FollowRecommend() {
  const router = useRouter();

  const { data: session } = useSession();

  const onFollow = () => {
    if (!session?.user) {
      router.replace("/i/flow/login");
    }
  };

  const user = {
    id: "elonmusk",
    nickname: "Elon Musk",
    image: "/yRsRRjGO.jpg",
  };

  return (
    <div className={style.container}>
      <div className={style.userLogoSection}>
        <div className={style.userLogo}>
          <img src={user.image} alt={user.id} />
        </div>
      </div>
      <div className={style.userInfo}>
        <div className={style.title}>{user.nickname}</div>
        <div className={style.count}>@{user.id}</div>
      </div>
      <div className={style.followButtonSection}>
        <button onClick={onFollow}>팔로우</button>
      </div>
    </div>
  );
}
