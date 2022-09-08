import React, { useEffect } from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Header from "../components/Header";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { __getTripDetail } from '../redex/modules/tripdetail';
import DayDetail from '../components/DayDetail';
import DayList from '../components/DayList';
import Button from '../elem/Button';
// import axios from 'axios';

const TripDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const detail = useSelector((state) => state.tripdetail);


  // console.log(detail)

  useEffect(() => {
    dispatch(__getTripDetail(id));
}, [dispatch])

// const handleDownload = (url) => {
//   url = `http://3.39.254.156/excel/${id}`

//   fetch(url, { method: 'GET' })
//       .then((res) => {
//           return res.blob();
//       })
//       .then((blob) => {
//           const url = window.URL.createObjectURL(blob);
//           const a = document.createElement('a');
//           a.href = url;
//           a.download = `여행지출내역_${detail?.trip?.data?.title}`;
//           document.body.appendChild(a);
//           a.click();
//           setTimeout((_) => {
//               window.URL.revokeObjectURL(url);
//           }, 60000);
//           a.remove();
//           setOpen(false);
//       })
//       .catch((err) => {
//           console.error('err: ', err);
//       });
// };

// const filedownload = () => {
//   axios({
//     url:  `http://3.39.254.156/excel/${id}`, // 파일 다운로드 요청 URL
//     method: "GET", // 혹은 'POST'
//     responseType: "blob", // 응답 데이터 타입 정의
//     headers: {
//       Authorization: localStorage.getItem("Token"),
//       RefreshToken: localStorage.getItem("RefreshToken")
//   }
//   }).then((response) => { console.log(response)
//     // 다운로드(서버에서 전달 받은 데이터) 받은 바이너리 데이터를 blob으로 변환합니다.
//     const blob = new Blob([response.data]);
//     // 특정 타입을 정의해야 경우에는 옵션을 사용해 MIME 유형을 정의 할 수 있습니다.
//     // const blob = new Blob([this.content], {type: 'text/plain'})

//     // blob을 사용해 객체 URL을 생성합니다.
//     const fileObjectUrl = window.URL.createObjectURL(blob);

//     // blob 객체 URL을 설정할 링크를 만듭니다.
//     const link = document.createElement("a");
//     link.href = fileObjectUrl;
//     link.style.display = "none";

//     // 다운로드 파일의 이름은 직접 지정 할 수 있습니다.
//     link.download = "지출데이터.xlsx";

//     // 링크를 body에 추가하고 강제로 click 이벤트를 발생시켜 파일 다운로드를 실행시킵니다.
//     document.body.appendChild(link);
//     link.click();
//     link.remove();

//     // 다운로드가 끝난 리소스(객체 URL)를 해제합니다.
//     window.URL.revokeObjectURL(fileObjectUrl);
//   });
// };


  return (
    <>
    <Header/>
    <Layout>
      <Container>
      <div>여행명: {detail?.trip?.data?.title}</div>
      <div>여행기간: {detail?.trip?.data?.tripStart} ~ {detail?.trip?.data?.tripEnd}</div>
      <div>여행설명: {detail?.trip?.data?.content}</div>
      {/* <Button onclick={filedownload}>파일 다운로드</Button> */}
      </Container>
      <Container>
      <div>총 지출 금액: {detail?.trip?.data?.total}</div>
      </Container>
      <DayList/>
    </Layout>
    </>
  )
}

export default TripDetail

const Container = styled.div`
            border: 1px solid #758BFD;
            padding: 30px;
            margin: 20px;
`