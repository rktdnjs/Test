import React from 'react';
import { Link, Outlet, useNavigate } from "react-router-dom";

const Menubar = () => {

    const navigate =useNavigate();
    const goHome = () => {
        navigate("/"); 
    };

    return (
        
        <div>
            {/* 우측상단 메뉴바 코드 */}
            <ul> 
                <li><Link to="/Register">회원가입</Link></li>
                <li><Link to="/Login">로그인</Link></li>
                <li><Link to="/Mypage">마이페이지</Link></li>
            </ul>

            {/* 로고 클릭시 홈페이지로 이동 */}
            <button onClick={goHome} type="button">홈으로 돌아가기</button>
            {/* <a href="/Store"><img src="./Logo"/></a> 일단 여기 코드는 추후 연구해보고 수정*/}

            {/* 좌측 상단 메뉴바 코드 */}
            <ul>
                <li><Link to="/Store">스토어</Link></li>
                <li><Link to="/Guide">가이드북</Link></li>
                <li><Link to="/Free">자유게시판</Link></li>
                <li><Link to="/Question">질문과답변</Link></li>
            </ul>
            
            <Outlet/>
        </div>
    );
};

export default Menubar;