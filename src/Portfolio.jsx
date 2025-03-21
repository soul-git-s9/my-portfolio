import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import './Portfolio.css';

function Portfolio() {
    const containerRef = useRef(null);

  useEffect(() => {
    const handleWheel = (e) => {
      if (containerRef.current) {
        containerRef.current.scrollLeft += e.deltaY * 0.5; // 수직 스크롤 값을 수평 스크롤로 변환
        e.preventDefault(); // 기본 수직 스크롤 동작 방지
      }
    };

    const container = containerRef.current;
    if (container) {
      container.addEventListener('wheel', handleWheel);
    }

    // 컴포넌트가 unmount될 때 이벤트 리스너 제거
    return () => {
      if (container) {
        container.removeEventListener('wheel', handleWheel);
      }
    };
  }, []);
  return (
    <div className="portfolio-page">
      <div className="home-link">
        <Link to="/.">&lt; HOME </Link>
      </div>
      <h2>PORTFOLIO</h2>
      <div className="frame-container" ref={containerRef}>
        <div className="frame">
          <img src="/my-portfolio/images/pf_image01.png" alt="삼성 포트폴리오" />
          <p>기본적인 퍼블리싱이 가능한 것을 보여주기 위해 작업한 개인 작업물</p>
          <Link to="https://soul-git-s9.github.io/song2023verPf/samsung/samsung.html">작업물 바로가기 &gt;</Link>
        </div>
        <div className="frame">
          <img src="/my-portfolio/images/pf_image02.png" alt="부트스트랩 포트폴리오" />
          <p>부트스트랩으로 간단한 쇼핑몰을 구현해 본 개인 작업물</p>
          <Link to="https://soul-git-s9.github.io/song2023verPf/shoppingmall/shoppingmall.html">작업물 바로가기 &gt;</Link>
        </div>
        {/* <div className="frame">
          <img src="/images/image3.jpg" alt="이미지 3" />
          <p>이미지 3 설명</p>
        </div>
        <div className="frame">
          <img src="/images/image4.jpg" alt="이미지 4" />
          <p>이미지 4 설명</p>
        </div>
        <div className="frame">
          <img src="/images/image4.jpg" alt="이미지 4" />
          <p>이미지 4 설명</p>
        </div> */}
      </div>
    </div>
  );
}

export default Portfolio;