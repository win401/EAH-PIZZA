import React, { useEffect } from "react";
// import { Map, Marker } from "react-kakao-maps";

const KakaoMap = () => {
  useEffect(() => {
    // 지도생성
    const container = document.getElementById("map");
    const options = {
      center: new window.kakao.maps.LatLng(37.28792430726936, 127.01503243512543),
      level: 5,
    };

    const map = new window.kakao.maps.Map(container, options);

    // 마커 생성
    const markerPosition = new window.kakao.maps.LatLng(37.28792430726936, 127.01503243512543);
    const marker = new window.kakao.maps.Marker({
      position: markerPosition,
    });

    // 마커에 표시될 정보창 생성
    const infowindow = new window.kakao.maps.InfoWindow({
      content: '<div style="width: 100%;">EAH PIZZA</div>', // 정보창에 표시될 내용
    });

    // 마커 클릭 시 정보창을 지도 위에 표시
    window.kakao.maps.event.addListener(marker, "click", function () {
      infowindow.open(map, marker);
    });

    // 마커 지도에 표시
    marker.setMap(map);

    // 컴포넌트 언마운트 시 지도 제거
    // return () => {
    //   map.remove();
    // };

    infowindow.open(map, marker);
  }, []);

  return <div id="map" style={{ width: "100%", height: "500px" }}></div>;
};

export default KakaoMap;
