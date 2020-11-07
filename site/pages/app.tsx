/*
 * @Descripttion: 
 * @Author: qingzi.wang
 * @Date: 2020-09-01 14:31:16
 */
import React from 'react';

import LayoutHOC from '../components/layout';
import { Button, Popover } from 'antd';
import './common/common.less';

declare var global: any;

const App = (props: any) => {

  const handleMenu = () => {
    props.history.push('/quick-start');
  }

  const content = (
    <div style={{padding:10,minHeight:200,minWidth:200}}>
      <img src="http://docs.antjob.ink/agile-ui/qr-demo.png" alt="demo-qr" width="200" />
    </div>
  );

  return (
    <div className="d-full">
      <div className="d-welcome">
        {/* <img src="http://docs.antjob.ink/funenc/danger.svg" alt="welcome" /> */}
        <h2 className="d-welcome__title">{ global.G_SYSTEM_TITLE.welcome.name }</h2>
        <div className="d-welcome__describe">{ global.G_SYSTEM_TITLE.welcome.describe }</div>
        <div>
          <Button type="primary" size="large" onClick={handleMenu}>快速开始</Button>
          <Popover content={content} trigger="click" placement="bottom">
            <Button type="dashed" size="large" style={{marginLeft:15}}>扫码预览</Button>
          </Popover>
          <div style={{display:'inline-block',marginLeft:15}}>
            <a href={global.G_GITHUB_URL} target="_blank" rel="noreferrer">
              <img src="http://img.shields.io/github/stars/qingzi-king/agile-mobile?style=social" alt="github-star" style={{height:28}} />
            </a>
          </div>
        </div>
      </div>
      <CutSVG />
      <CutCitySVG />
    </div>
  )
};

// 插画
const CutSVG = () => {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="d-welcome-cut" viewBox="0 0 330 260"><g id="_514_chart_flatline" data-name="#514_chart_flatline"><polygon points="243.69 163 243.69 61.99 269.29 81.25 269.29 182.27 243.69 163" fill="#d1d3d4"/><path d="M269.29,182.72a.47.47,0,0,1-.28-.09l-25.59-19.26a.45.45,0,0,1-.19-.36V62a.47.47,0,0,1,.74-.37l25.59,19.27a.44.44,0,0,1,.19.36v101a.46.46,0,0,1-.26.41A.45.45,0,0,1,269.29,182.72Zm-25.14-19.94,24.68,18.57V81.48L244.15,62.9Z" fill="#231f20"/><polygon points="269.29 182.27 299.64 168.42 299.64 67.4 269.29 81.25 269.29 182.27" fill="#fff"/><path d="M269.29,182.77a.5.5,0,0,1-.5-.5v-101a.48.48,0,0,1,.29-.45l30.35-13.86a.54.54,0,0,1,.48,0,.5.5,0,0,1,.23.42v101a.49.49,0,0,1-.29.45L269.5,182.72A.54.54,0,0,1,269.29,182.77Zm.5-101.2v99.92l29.35-13.4V68.18Z" fill="#231f20"/><polygon points="269.29 81.25 299.64 67.4 275.28 48.9 243.69 61.99 269.29 81.25" fill="#fff"/><path d="M269.29,81.75a.47.47,0,0,1-.3-.1l-25.6-19.26a.49.49,0,0,1-.19-.46.48.48,0,0,1,.3-.4l31.59-13.09a.48.48,0,0,1,.49.06L299.94,67a.51.51,0,0,1,.2.45.49.49,0,0,1-.29.4L269.5,81.71A.52.52,0,0,1,269.29,81.75Zm-24.6-19.63,24.66,18.55,29.32-13.38L275.21,49.47Z" fill="#231f20"/><polygon points="208.88 179.18 208.88 127.36 234.47 146.63 234.47 198.44 208.88 179.18" fill="#d1d3d4"/><path d="M234.47,198.9a.46.46,0,0,1-.27-.09l-25.6-19.26a.47.47,0,0,1-.18-.37V127.37a.45.45,0,0,1,.25-.41.46.46,0,0,1,.48,0l25.6,19.26a.47.47,0,0,1,.18.37v51.81a.46.46,0,0,1-.25.41A.54.54,0,0,1,234.47,198.9Zm-25.14-20L234,197.53V146.85l-24.69-18.57Z" fill="#231f20"/><polygon points="234.47 198.44 264.82 184.59 264.82 132.78 234.47 146.63 234.47 198.44" fill="#fff"/><path d="M234.47,198.94a.45.45,0,0,1-.27-.08.5.5,0,0,1-.23-.42V146.63a.51.51,0,0,1,.29-.46l30.36-13.85a.51.51,0,0,1,.48,0,.54.54,0,0,1,.23.43v51.81a.51.51,0,0,1-.3.46L234.68,198.9A.52.52,0,0,1,234.47,198.94Zm.5-52v50.72l29.36-13.4V133.55Z" fill="#231f20"/><polygon points="234.47 146.63 264.82 132.78 240.47 114.28 208.88 127.36 234.47 146.63" fill="#fff"/><path d="M234.47,147.13a.57.57,0,0,1-.3-.1l-25.59-19.27a.48.48,0,0,1-.2-.46.5.5,0,0,1,.3-.4l31.59-13.09a.5.5,0,0,1,.5.07l24.36,18.5a.5.5,0,0,1-.1.85l-30.35,13.85A.54.54,0,0,1,234.47,147.13Zm-24.59-19.64,24.66,18.56,29.32-13.38-23.47-17.82Z" fill="#231f20"/><polygon points="174.06 195.36 174.06 113.05 199.66 132.31 199.66 214.62 174.06 195.36" fill="#d1d3d4"/><path d="M199.66,215.08a.48.48,0,0,1-.28-.1l-25.59-19.26a.44.44,0,0,1-.19-.36V113.05a.46.46,0,0,1,.73-.37l25.6,19.26a.45.45,0,0,1,.18.37v82.31a.46.46,0,0,1-.45.46Zm-25.14-20L199.2,213.7V132.54L174.52,114Z" fill="#231f20"/><polygon points="199.66 214.62 230.01 200.77 230.01 118.46 199.66 132.31 199.66 214.62" fill="#fff"/><path d="M199.66,215.12a.5.5,0,0,1-.27-.08.48.48,0,0,1-.23-.42V132.31a.5.5,0,0,1,.29-.46L229.8,118a.48.48,0,0,1,.48,0,.5.5,0,0,1,.23.42v82.31a.49.49,0,0,1-.29.45l-30.35,13.85A.54.54,0,0,1,199.66,215.12Zm.5-82.49v81.21l29.35-13.39V119.23Z" fill="#231f20"/><polygon points="199.66 132.31 230.01 118.46 205.65 99.95 174.06 113.05 199.66 132.31" fill="#fff"/><path d="M199.66,132.81a.51.51,0,0,1-.3-.1l-25.6-19.27a.5.5,0,0,1-.2-.46.51.51,0,0,1,.31-.4l31.59-13.09a.49.49,0,0,1,.49.07l24.36,18.5a.5.5,0,0,1,.2.45.49.49,0,0,1-.29.4l-30.35,13.85A.54.54,0,0,1,199.66,132.81Zm-24.6-19.64,24.66,18.56L229,118.35l-23.46-17.82Z" fill="#231f20"/><polygon points="139.25 211.53 139.25 160.52 164.84 179.78 164.84 230.79 139.25 211.53" fill="#d1d3d4"/><path d="M164.84,231.25a.44.44,0,0,1-.27-.09L139,211.9a.47.47,0,0,1-.18-.37v-51a.47.47,0,0,1,.25-.41.46.46,0,0,1,.48,0l25.6,19.26a.47.47,0,0,1,.18.36v51a.45.45,0,0,1-.25.4A.41.41,0,0,1,164.84,231.25ZM139.7,211.31l24.68,18.57V180L139.7,161.44Z" fill="#231f20"/><polygon points="164.84 230.79 195.19 216.94 195.19 165.93 164.84 179.78 164.84 230.79" fill="#fff"/><path d="M164.84,231.3a.53.53,0,0,1-.27-.08.52.52,0,0,1-.23-.42v-51a.51.51,0,0,1,.29-.45L195,165.48a.49.49,0,0,1,.47,0,.48.48,0,0,1,.23.42v51a.5.5,0,0,1-.29.46l-30.35,13.85A.54.54,0,0,1,164.84,231.3Zm.5-51.19V230l29.35-13.4V166.71Z" fill="#231f20"/><polygon points="164.84 179.78 195.19 165.93 170.83 147.43 139.25 160.52 164.84 179.78" fill="rgba(239,243,246,.8)"/><path d="M164.84,180.28a.49.49,0,0,1-.3-.1l-25.6-19.26a.5.5,0,0,1,.11-.86L170.64,147a.53.53,0,0,1,.5.06l24.36,18.51a.48.48,0,0,1,.19.45.52.52,0,0,1-.29.4l-30.35,13.85A.52.52,0,0,1,164.84,180.28Zm-24.59-19.63,24.66,18.56,29.32-13.38L170.76,148Z" fill="#231f20"/><polygon points="104.43 227.71 104.43 194.59 130.03 213.85 130.03 246.97 104.43 227.71" fill="#d1d3d4"/><path d="M130,247.43a.47.47,0,0,1-.28-.09l-25.59-19.26a.47.47,0,0,1-.19-.37V194.59a.46.46,0,0,1,.26-.41.45.45,0,0,1,.47,0l25.6,19.26a.44.44,0,0,1,.18.36V247a.44.44,0,0,1-.25.41A.46.46,0,0,1,130,247.43Zm-25.14-20,24.68,18.58v-32l-24.68-18.57Z" fill="#231f20"/><polygon points="130.03 246.97 160.38 233.12 160.38 200 130.03 213.85 130.03 246.97" fill="#fff"/><path d="M130,247.47a.5.5,0,0,1-.27-.08.48.48,0,0,1-.23-.42V213.85a.49.49,0,0,1,.29-.45l30.35-13.85a.5.5,0,0,1,.71.45v33.12a.52.52,0,0,1-.29.46l-30.36,13.85A.45.45,0,0,1,130,247.47Zm.5-33.29v32l29.35-13.39v-32Z" fill="#231f20"/><polygon points="130.03 213.85 160.38 200 136.02 181.5 104.43 194.59 130.03 213.85" fill="rgba(239,243,246,1)"/><path d="M130,214.35a.45.45,0,0,1-.3-.1L104.13,195a.49.49,0,0,1,.11-.86L135.83,181a.51.51,0,0,1,.49.06l24.36,18.5a.51.51,0,0,1,.2.46.52.52,0,0,1-.29.4l-30.36,13.85A.45.45,0,0,1,130,214.35Zm-24.6-19.63,24.66,18.56,29.32-13.38-23.47-17.83Z" fill="#231f20"/><path d="M137.16,86a23.34,23.34,0,0,1-4.56-.12,6.23,6.23,0,0,1-2.38-.59,2.47,2.47,0,0,1-1.39-1.91,1.57,1.57,0,0,1,1.39-1.7,29.25,29.25,0,0,1-3.33-2.17,7.27,7.27,0,0,1-2.18-2.34,2.93,2.93,0,0,1,.12-3c1-1.34,3.11-1.08,4.63-1.81l-3.18-2.07a2.21,2.21,0,0,1-.57-.48,1.48,1.48,0,0,1,0-1.64A3.49,3.49,0,0,1,127,67a11.67,11.67,0,0,1,8-1.47l-1.37-1.82a1.23,1.23,0,0,1-.3-.63c0-.53.58-.86,1.11-.9a8.08,8.08,0,0,1,2.95.65c1.64.49,3.36.62,5,1,2.68.63,5.88,2.93,6.12,6A2.35,2.35,0,0,1,147,72.23c0,3.21-1.17,5.65-2.8,8.29A15,15,0,0,1,140,85.19,6.84,6.84,0,0,1,137.16,86Z" fill="#fff"/><path d="M135.7,86.56c-1.09,0-2.17-.1-3.15-.19a6.85,6.85,0,0,1-2.57-.64,3,3,0,0,1-1.65-2.32,2.23,2.23,0,0,1,.57-1.62l.2-.19c-.86-.52-1.71-1.1-2.51-1.7a7.55,7.55,0,0,1-2.32-2.51,3.41,3.41,0,0,1,.16-3.59,4.73,4.73,0,0,1,3.06-1.45l.84-.19L126,70.65a2.68,2.68,0,0,1-.7-.59,2,2,0,0,1,0-2.2,4.11,4.11,0,0,1,1.46-1.34,12.24,12.24,0,0,1,7.19-1.69l-.66-.87a1.67,1.67,0,0,1-.4-.9c-.06-.84.77-1.36,1.57-1.43a6.48,6.48,0,0,1,2.56.48l.58.19a22.68,22.68,0,0,0,2.86.6c.69.12,1.42.24,2.13.41,3,.69,6.24,3.18,6.49,6.4a2.93,2.93,0,0,1-1.58,2.88c0,3.31-1.44,5.86-2.87,8.19-.51.83-2.33,3.63-4.37,4.84a7.1,7.1,0,0,1-3,.87h0C136.71,86.54,136.21,86.56,135.7,86.56Zm1.46-.57h0ZM133,65.8a11.18,11.18,0,0,0-5.75,1.58,3.18,3.18,0,0,0-1.11,1,1,1,0,0,0,0,1.09,2,2,0,0,0,.46.36l3.17,2.07a.53.53,0,0,1,.23.46.47.47,0,0,1-.29.41,8.79,8.79,0,0,1-2,.58,4,4,0,0,0-2.47,1.08,2.47,2.47,0,0,0-.06,2.53,6.64,6.64,0,0,0,2,2.16,29.07,29.07,0,0,0,3.27,2.13.5.5,0,0,1,.25.55.52.52,0,0,1-.48.39.84.84,0,0,0-.59.29,1.27,1.27,0,0,0-.31.88,2,2,0,0,0,1.12,1.5,5.6,5.6,0,0,0,2.19.53,22.93,22.93,0,0,0,4.48.12,6.18,6.18,0,0,0,2.59-.73,14.68,14.68,0,0,0,4-4.5c1.76-2.87,2.77-5.1,2.72-8a.5.5,0,0,1,.39-.49,1.86,1.86,0,0,0,1.2-2c-.21-2.65-3.08-4.88-5.73-5.51-.68-.16-1.39-.28-2.07-.39a24.39,24.39,0,0,1-3-.64l-.61-.19a5.51,5.51,0,0,0-2.16-.43c-.33,0-.66.21-.65.37s.12.24.2.35l1.37,1.83a.48.48,0,0,1,0,.56.51.51,0,0,1-.52.23A10.45,10.45,0,0,0,133,65.8Z" fill="#231f20"/><path d="M148.65,76.6s2.91,3.23,2.53,4.05-2.08.57-2.08.57" fill="#fff"/><path d="M149.66,81.76a4.28,4.28,0,0,1-.64-.05.5.5,0,0,1-.42-.56.52.52,0,0,1,.57-.43c.55.08,1.42,0,1.56-.28a12.06,12.06,0,0,0-2.45-3.51.48.48,0,0,1,0-.7.49.49,0,0,1,.7,0c1.43,1.59,3,3.68,2.62,4.6A2.08,2.08,0,0,1,149.66,81.76Z" fill="#231f20"/><path d="M147.43,71.93c1.7,1,1.65,3.68,1.89,5.37q.51,3.58.85,7.19c.15,1.52-3.76,2.14-4.52,1.79l1.51,5.88-8.7-1.92-.4-5a5.05,5.05,0,0,0,3.73-3.69c1.07-3.31-.15-10-.15-10S145.78,70.94,147.43,71.93Z" fill="#fff"/><path d="M147.16,92.66h-.11l-8.7-1.92a.51.51,0,0,1-.39-.45l-.4-5a.5.5,0,0,1,.43-.53,4.58,4.58,0,0,0,3.33-3.35c1-3.15-.16-9.66-.17-9.73a.56.56,0,0,1,.08-.38.5.5,0,0,1,.33-.2c.45-.07,4.37-.65,6.13.4h0c1.62,1,1.85,3.1,2,4.82,0,.33.07.63.11.91.33,2.39.62,4.81.85,7.21a1.57,1.57,0,0,1-.79,1.46,6.92,6.92,0,0,1-3.56,1L147.64,92a.49.49,0,0,1-.48.62Zm-8.23-2.83,7.54,1.67-1.3-5.09a.49.49,0,0,1,.16-.51.51.51,0,0,1,.53-.07,5.79,5.79,0,0,0,3.45-.75c.26-.19.38-.37.37-.54-.23-2.39-.52-4.8-.85-7.16,0-.3-.08-.62-.11-.95-.16-1.5-.35-3.36-1.54-4.07s-3.6-.5-5-.34c.27,1.65,1,6.81.05,9.7a5.7,5.7,0,0,1-3.68,3.91Z" fill="#231f20"/><path d="M149.85,82.72a2,2,0,0,1-2.95-.35" fill="#fff"/><path d="M148.43,83.76l-.27,0a2.36,2.36,0,0,1-1.66-1.08.49.49,0,0,1,.11-.7.5.5,0,0,1,.7.12,1.46,1.46,0,0,0,1,.67,2,2,0,0,0,1.25-.41.5.5,0,0,1,.64.76A3,3,0,0,1,148.43,83.76Z" fill="#231f20"/><path d="M144.31,78.81a3.32,3.32,0,0,0-.92-1.54,4.84,4.84,0,0,0-1-1,1.62,1.62,0,0,0-1.35-.2,1.46,1.46,0,0,0-.82.88,2.7,2.7,0,0,0-.12,1.23,5.15,5.15,0,0,0,3,4.18l-.15-.12" fill="#fff"/><path d="M143.07,82.91a.28.28,0,0,1-.15,0,5.65,5.65,0,0,1-3.34-4.6,3.28,3.28,0,0,1,.15-1.44,2,2,0,0,1,1.12-1.18,2.09,2.09,0,0,1,1.78.24,5.27,5.27,0,0,1,1.14,1,3.84,3.84,0,0,1,1,1.79.5.5,0,0,1-1,.16A2.89,2.89,0,0,0,143,77.6a4.55,4.55,0,0,0-.91-.85,1.08,1.08,0,0,0-.91-.16.93.93,0,0,0-.53.59,2.2,2.2,0,0,0-.09,1A4.68,4.68,0,0,0,143,81.81a.39.39,0,0,1,.26.09.62.62,0,0,1,.19.71A.51.51,0,0,1,143.07,82.91Z" fill="#231f20"/><ellipse cx="146.9" cy="74.85" rx="0.34" ry="0.86" transform="translate(-12.07 31.14) rotate(-11.63)" fill="#231f20"/><path d="M137,92l.31-2.74,10.61-1L149.66,92A20.92,20.92,0,0,1,137,92Z" fill="#fff"/><path d="M143.49,93.44a22.43,22.43,0,0,1-6.62-1,.51.51,0,0,1-.35-.54l.31-2.73a.5.5,0,0,1,.45-.45l10.61-1a.51.51,0,0,1,.5.29l1.73,3.73a.51.51,0,0,1,0,.4.5.5,0,0,1-.29.28A19.17,19.17,0,0,1,143.49,93.44Zm-5.93-1.84a21.09,21.09,0,0,0,11.41.09l-1.34-2.9-9.85.89Z" fill="#231f20"/><path d="M177.56,101.64s2.59-4.65,2.72-5.55-.11-2.66.38-4,2.07-2.64,3.08-1c0,0,.07-2.87,2.15-1.55a5.15,5.15,0,0,1,2.5,5.32c-.22,2.21-6.7,14.09-6.7,14.09" fill="#fff"/><path d="M181.69,109.43a.53.53,0,0,1-.24-.06.51.51,0,0,1-.2-.68c1.79-3.28,6.47-12.17,6.64-13.9a4.66,4.66,0,0,0-2.27-4.85c-.22-.14-.63-.36-.87-.23s-.5.92-.51,1.38a.5.5,0,0,1-.92.25c-.35-.55-.67-.51-.77-.5a2.18,2.18,0,0,0-1.42,1.44,8,8,0,0,0-.3,2.66,10.8,10.8,0,0,1-.05,1.22c-.14.94-2.35,4.94-2.79,5.73a.5.5,0,1,1-.87-.49A40.9,40.9,0,0,0,179.79,96c0-.27,0-.66,0-1.08a8.8,8.8,0,0,1,.36-3,3.12,3.12,0,0,1,2.25-2.08,1.59,1.59,0,0,1,1,.2,1.94,1.94,0,0,1,.86-1.22,1.83,1.83,0,0,1,1.89.27,5.63,5.63,0,0,1,2.72,5.79c-.22,2.25-6.08,13-6.75,14.28A.51.51,0,0,1,181.69,109.43Z" fill="#231f20"/><path d="M109.09,122.56s-.63,2.19-.9,3.8a21.24,21.24,0,0,0,.07,4.49c-.46-.38-1.08-.39-1.55-.72a5.89,5.89,0,0,1-.13,1.92,1.93,1.93,0,0,1-1.25,1.36,2.51,2.51,0,0,1-1,0c-1.23-.17-3.27-.53-3.76-1.89a2.83,2.83,0,0,1,0-1.63c.52-2.21,3.54-8.27,4-9.25" fill="#fff"/><path d="M104.86,134a4.21,4.21,0,0,1-.62-.05c-1.06-.15-3.54-.51-4.16-2.22a3.3,3.3,0,0,1,0-1.92c.59-2.47,4.06-9.29,4.09-9.36a.5.5,0,0,1,.67-.21.49.49,0,0,1,.22.67c-.89,1.74-3.54,7.15-4,9.14a2.47,2.47,0,0,0,0,1.34c.41,1.15,2.55,1.45,3.36,1.57a2.19,2.19,0,0,0,.81,0,1.45,1.45,0,0,0,.91-1,5.33,5.33,0,0,0,.11-1.75.49.49,0,0,1,.26-.46.51.51,0,0,1,.53,0,2,2,0,0,0,.59.25l.09,0a17.16,17.16,0,0,1,0-3.72c.27-1.62.89-3.76.91-3.85a.51.51,0,0,1,.62-.35.5.5,0,0,1,.34.62s-.62,2.18-.88,3.74a20.12,20.12,0,0,0,.07,4.35.5.5,0,0,1-.82.44,2.09,2.09,0,0,0-.67-.31h0a4.69,4.69,0,0,1-.17,1.28,2.19,2.19,0,0,1-2.2,1.78Z" fill="#231f20"/><path d="M168,164.59s-.39,6.11,2.18,6.8,14.58-10.53,13.51-12.73-5.49-2.62-9.18.73A58.91,58.91,0,0,1,168,164.59Z" fill="#fff"/><path d="M170.39,171.93a1.34,1.34,0,0,1-.35-.05c-2.89-.77-2.6-6.66-2.55-7.32a.49.49,0,0,1,.23-.4,60,60,0,0,0,6.44-5.16,8.66,8.66,0,0,1,7.22-2.46,3.75,3.75,0,0,1,2.78,1.9c.25.52.32,1.54-2,4.34C179.43,166.09,173,171.93,170.39,171.93Zm-1.89-7.06c-.06,1.66.14,5.57,1.81,6,1.37.36,7.58-4.55,11.07-8.77,2.13-2.58,1.85-3.23,1.85-3.23a2.75,2.75,0,0,0-2-1.34,7.63,7.63,0,0,0-6.33,2.22A62,62,0,0,1,168.5,164.87Z" fill="#231f20"/><path d="M140,139.29s15.61,2.9,26.87-.09l1,25.38s4.45,1.23,8.68-5.23c0,0,2.11-31.44-1-32.7s-29.93,2.63-29.93,2.63Z" fill="#231f20"/><path d="M168.79,165.17a4.79,4.79,0,0,1-1.07-.11.49.49,0,0,1-.36-.46l-.94-24.76c-11.19,2.72-26.33,0-26.49-.06a.49.49,0,0,1-.34-.73l5.61-10a.49.49,0,0,1,.37-.25c2.76-.4,27.09-3.87,30.19-2.6s1.77,25.73,1.27,33.19a.41.41,0,0,1-.08.24C173.77,164.47,170.45,165.17,168.79,165.17Zm-.45-1c1.07.12,4.39,0,7.71-5,1.29-19.38.68-31.52-.66-32.07-2.14-.88-18.68,1.08-29.44,2.63l-5.15,9.18c3.13.51,16.27,2.37,26-.2a.5.5,0,0,1,.63.46Z" fill="#231f20"/><path d="M131.22,135.55s4.22,23.31,3.46,23.77-20.9,20.41-20.9,20.41l.34,7.76s29.63-18.5,30.66-23,3.56-30.31,3.56-30.31Z" fill="#231f20"/><path d="M114.12,188a.59.59,0,0,1-.23-.05.49.49,0,0,1-.26-.42l-.35-7.77a.51.51,0,0,1,.15-.37c3.24-3.21,19-18.78,20.84-20.37.21-1.6-2-15.08-3.54-23.37a.5.5,0,0,1,.1-.39.46.46,0,0,1,.35-.2l17.12-1.35a.54.54,0,0,1,.4.15.53.53,0,0,1,.14.4c-.11,1.05-2.55,25.9-3.57,30.37s-27.83,21.39-30.88,23.3A.52.52,0,0,1,114.12,188Zm.17-8.06.29,6.69c11.83-7.43,29-19.15,29.71-22.23.93-4,3.11-25.76,3.5-29.65l-16,1.26c4.17,23.12,3.5,23.52,3.13,23.74C134.24,160.24,122.27,172,114.29,179.93Zm20.14-21-.05,0Z" fill="#231f20"/><path d="M159,96.29s-1.68-5-17-5.44a22.31,22.31,0,0,0-10.74,2.28c-.21,2.39.16,36.57-.78,44.75,0,0,19,3.83,26.39-8.5C156.79,129.38,158,98.94,159,96.29Z" fill="#5993db"/><rect x="82.72" y="134.02" width="33.15" height="21.5" rx="2.81" transform="translate(41.29 -20.92) rotate(15.15)" fill="#fff"/><path d="M110.51,159.34a3.26,3.26,0,0,1-.87-.12h0L83.07,152A3.31,3.31,0,0,1,80.74,148l4.15-15.33A3.31,3.31,0,0,1,89,130.31l26.57,7.2a3.31,3.31,0,0,1,2.33,4.06l-4.15,15.32a3.27,3.27,0,0,1-1.55,2A3.31,3.31,0,0,1,110.51,159.34Zm-.61-1.08a2.31,2.31,0,0,0,2.83-1.63l4.15-15.32a2.31,2.31,0,0,0-1.62-2.84l-26.58-7.19a2.31,2.31,0,0,0-2.83,1.62L81.7,148.23a2.31,2.31,0,0,0,1.63,2.83Z" fill="#231f20"/><path d="M113.24,143.92l-.13,0L87.8,137.05a.5.5,0,0,1,.26-1l25.31,6.86a.5.5,0,0,1-.13,1Z" fill="#d1d3d4"/><path d="M108,136.49h-.13l-11.82-3.2a.48.48,0,0,1-.3-.24.46.46,0,0,1-.05-.38l.61-2.26a2.63,2.63,0,0,1,3.22-1.85l7.72,2.1a2.57,2.57,0,0,1,1.59,1.22,2.62,2.62,0,0,1,.26,2l-.61,2.26a.53.53,0,0,1-.24.31A.51.51,0,0,1,108,136.49ZM96.8,132.44l10.86,2.94.48-1.78a1.63,1.63,0,0,0-1.14-2l-7.72-2.09a1.63,1.63,0,0,0-1.24.16,1.58,1.58,0,0,0-.75,1Z" fill="#231f20"/><path d="M134.85,91.63s-14.56,5.73-17.9,8.56-15.37,20.59-15.37,20.59L112,124.7s7.33-12.24,9.75-14.21S136.14,108,136.14,108Z" fill="#5993db"/><path d="M159,96.29s11,14.35,12.31,13.26,6-11.35,6-11.35l8,6.68s-2.89,18.42-11.45,17.71-23.39-13.38-23.39-13.38Z" fill="#5993db"/><path d="M164.26,119.45a.45.45,0,0,1-.2,0c-7.68-3.31-13.88-9.79-13.94-9.85a.5.5,0,1,1,.72-.69c.06.06,6.13,6.4,13.61,9.62a.49.49,0,0,1,.26.66A.49.49,0,0,1,164.26,119.45Z" fill="#231f20"/><path d="M130.82,131h0a.5.5,0,0,1-.48-.52c.21-4.74.1-28.38.1-28.62a.5.5,0,0,1,.5-.5h0a.5.5,0,0,1,.5.5c0,.24.11,23.89-.1,28.66A.5.5,0,0,1,130.82,131Z" fill="#231f20"/><path d="M118.49,183.54c.84-5.81-1.39-8.1-3.4-7.91s-3.34.09-4.07,5.77.44,14.34,3.63,14.31S117.64,189.36,118.49,183.54Z" fill="#fff"/><path d="M114.64,196.22a2.55,2.55,0,0,1-1.93-1c-2.09-2.36-2.83-9.11-2.2-13.93.72-5.58,2.1-6,4.29-6.19l.24,0a3.12,3.12,0,0,1,2.59,1c1.37,1.43,1.86,4.09,1.37,7.47-.18,1.23-.31,2.49-.44,3.71-.5,4.75-.93,8.86-3.9,8.89Zm.69-20.08h-.19l-.24,0c-1.75.16-2.72.25-3.37,5.29-.58,4.5.07,11,2,13.11a1.54,1.54,0,0,0,1.16.62h0c2,0,2.43-3.7,2.88-8,.13-1.23.26-2.5.45-3.75.6-4.13-.43-5.92-1.09-6.61A2.17,2.17,0,0,0,115.33,176.14Z" fill="#231f20"/><path d="M145.2,224a.5.5,0,0,1-.14-1c29.52-8.67,44.33-36,55.15-55.91,6.91-12.74,11.91-21.95,18.09-21,6.87,1.09,10,4.87,13.13,8.53,3.87,4.59,7.5,8.94,18.2,8.45,19.12-.87,67.8-97.29,68.29-98.26a.5.5,0,0,1,.9.45c-.12.24-12.45,24.71-27,49C272.17,147,258,163.73,249.67,164.11c-11.17.51-15.15-4.23-19-8.81-3.1-3.68-6-7.15-12.53-8.18-5.5-.87-10.59,8.55-17,20.46-10.9,20.09-25.83,47.6-55.75,56.39Z" fill="#231f20"/><path d="M318.37,75.49a.5.5,0,0,1-.5-.5V65.82l-8.47,3.46a.5.5,0,0,1-.65-.27.51.51,0,0,1,.27-.66l9.16-3.74a.52.52,0,0,1,.47,0,.49.49,0,0,1,.22.41V75A.5.5,0,0,1,318.37,75.49Z" fill="#231f20"/><path d="M206.53,83.76a.5.5,0,0,1-.19-1l13.74-5.54a.5.5,0,1,1,.37.93l-13.74,5.54A.58.58,0,0,1,206.53,83.76Z" fill="#e6e7e8"/><path d="M206.53,77.38a.51.51,0,0,1-.47-.32.5.5,0,0,1,.28-.65l23.09-9.31a.5.5,0,0,1,.65.28.5.5,0,0,1-.28.65l-23.09,9.31A.58.58,0,0,1,206.53,77.38Z" fill="#e6e7e8"/><path d="M206.53,71a.5.5,0,0,1-.19-1l23.09-9.31a.5.5,0,0,1,.65.28.5.5,0,0,1-.28.65L206.71,71A.57.57,0,0,1,206.53,71Z" fill="#e6e7e8"/><path d="M206.53,64.61a.5.5,0,0,1-.19-1l23.09-9.31a.5.5,0,0,1,.37.93l-23.09,9.31A.57.57,0,0,1,206.53,64.61Z" fill="#e6e7e8"/><path d="M161.21,73.66a.5.5,0,0,1-.46-.31.51.51,0,0,1,.27-.66l20.48-8.25a.5.5,0,1,1,.37.93L161.4,73.62A.43.43,0,0,1,161.21,73.66Z" fill="#e6e7e8"/><path d="M161.21,67.28a.49.49,0,0,1-.46-.32.5.5,0,0,1,.27-.65L184.11,57a.51.51,0,0,1,.65.28.49.49,0,0,1-.27.65L161.4,67.24A.43.43,0,0,1,161.21,67.28Z" fill="#e6e7e8"/><path d="M161.21,60.9a.49.49,0,0,1-.46-.32.5.5,0,0,1,.27-.65l23.09-9.31a.5.5,0,0,1,.38.93L161.4,60.86A.65.65,0,0,1,161.21,60.9Z" fill="#e6e7e8"/><path d="M306.65,110.68a.5.5,0,0,1-.19-1L320.75,104a.5.5,0,1,1,.37.93l-14.28,5.76A.63.63,0,0,1,306.65,110.68Z" fill="#e6e7e8"/><path d="M306.65,118.32a.5.5,0,0,1-.19-1l14.29-5.76a.5.5,0,1,1,.37.93l-14.28,5.76A.63.63,0,0,1,306.65,118.32Z" fill="#e6e7e8"/><path d="M306.65,126a.5.5,0,0,1-.19-1l14.29-5.76a.5.5,0,0,1,.65.27.51.51,0,0,1-.28.66l-14.28,5.75A.43.43,0,0,1,306.65,126Z" fill="#e6e7e8"/><path d="M306.65,133.6a.5.5,0,0,1-.19-1l14.29-5.76a.51.51,0,0,1,.65.27.5.5,0,0,1-.28.65l-14.28,5.76A.43.43,0,0,1,306.65,133.6Z" fill="#e6e7e8"/><path d="M306.65,141.24a.49.49,0,0,1-.46-.31.51.51,0,0,1,.27-.66l14.29-5.75a.5.5,0,1,1,.37.92l-14.28,5.76A.43.43,0,0,1,306.65,141.24Z" fill="#e6e7e8"/><path d="M306.65,148.88a.48.48,0,0,1-.46-.32.5.5,0,0,1,.27-.65L313.6,145a.5.5,0,0,1,.38.93l-7.14,2.88A.43.43,0,0,1,306.65,148.88Z" fill="#e6e7e8"/><path d="M131.48,260.19a.57.57,0,0,1-.31-.1L78.54,219.61a.5.5,0,1,1,.61-.79l52.39,40.29L321,171a.5.5,0,0,1,.42.91L131.69,260.14A.54.54,0,0,1,131.48,260.19Z" fill="#231f20"/></g></svg>
  )
}

const CutCitySVG = () => {
  return (
    <svg className="d-welcome-cut__city" viewBox="0 0 507 481" version="1.1" xmlns="http://www.w3.org/2000/svg">
    <defs>
        <linearGradient x1="50%" y1="0.554523601%" x2="50%" y2="100%" id="linearGradient-1">
            <stop stop-color="#EFF3F6" stop-opacity="0" offset="0%"></stop>
            <stop stop-color="#EFF3F6" stop-opacity="0.654092002" offset="100%"></stop>
        </linearGradient>
        <polygon id="path-2" points="281.668027 326.208309 402.689315 396.570317 474.778355 455.043637 0 455.043637 43.7607084 388.464289"></polygon>
        <filter x="-5.4%" y="-17.5%" width="110.7%" height="139.6%" filterUnits="objectBoundingBox" id="filter-3">
            <feOffset dx="0" dy="3" in="SourceAlpha" result="shadowOffsetOuter1"></feOffset>
            <feGaussianBlur stdDeviation="8" in="shadowOffsetOuter1" result="shadowBlurOuter1"></feGaussianBlur>
            <feColorMatrix values="0 0 0 0 0.937254902   0 0 0 0 0.952941176   0 0 0 0 0.964705882  0 0 0 1 0" type="matrix" in="shadowBlurOuter1"></feColorMatrix>
        </filter>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="100%" id="linearGradient-4">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <filter x="-11.8%" y="-1.6%" width="123.5%" height="103.2%" filterUnits="objectBoundingBox" id="filter-5">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="100%" id="linearGradient-6">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <filter x="-11.8%" y="-1.5%" width="123.5%" height="103.0%" filterUnits="objectBoundingBox" id="filter-7">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter x="-11.8%" y="-1.6%" width="123.5%" height="103.2%" filterUnits="objectBoundingBox" id="filter-8">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter x="-11.8%" y="-1.6%" width="123.5%" height="103.2%" filterUnits="objectBoundingBox" id="filter-9">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="100%" id="linearGradient-10">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <filter x="-11.8%" y="-3.2%" width="123.5%" height="106.5%" filterUnits="objectBoundingBox" id="filter-11">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <filter x="-11.8%" y="-3.2%" width="123.5%" height="106.5%" filterUnits="objectBoundingBox" id="filter-12">
            <feGaussianBlur stdDeviation="2" in="SourceGraphic"></feGaussianBlur>
        </filter>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="124.929606%" id="linearGradient-13">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="124.929606%" id="linearGradient-14">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="124.301748%" id="linearGradient-15">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
        <linearGradient x1="50%" y1="9.08650235%" x2="50%" y2="168.26808%" id="linearGradient-16">
            <stop stop-color="#FFFFFF" offset="0%"></stop>
            <stop stop-color="#E4EAEF" offset="100%"></stop>
        </linearGradient>
    </defs>
    <g id="页面-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g id="city" transform="translate(16.145330, 6.791691)">
            <g id="b1">
                <use fill="black" fill-opacity="1" filter="url(#filter-3)"><polygon id="path-2" points="281.668027 326.208309 402.689315 396.570317 474.778355 455.043637 0 455.043637 43.7607084 388.464289"></polygon></use>
                <use fill="url(#linearGradient-1)" fill-rule="evenodd"><polygon id="path-2" points="281.668027 326.208309 402.689315 396.570317 474.778355 455.043637 0 455.043637 43.7607084 388.464289"></polygon></use>
            </g>
            <rect id="r3" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-4)" filter="url(#filter-5)" x="101.35467" y="57.7083092" width="50" height="371"></rect>
            <path d="M162.35467,0.862550161 L212.35467,29.4981474 L212.35467,400.708309 L162.35467,400.708309 L162.35467,0.862550161 Z" id="r4" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-6)" filter="url(#filter-7)"></path>
            <rect id="r5" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-4)" filter="url(#filter-8)" x="233.35467" y="64.7083092" width="50" height="371"></rect>
            <path d="M342.35467,78.1197227 L342.35467,448.708309 L292.35467,448.708309 L292.35467,109.975441 L342.35467,78.1197227 Z" id="r6" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-4)" filter="url(#filter-9)"></path>
            <rect id="r7" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-10)" filter="url(#filter-11)" x="389.35467" y="250.708309" width="50" height="185"></rect>
            <rect id="r8" stroke="#EFF3F6" fill-opacity="0.53" fill="url(#linearGradient-10)" filter="url(#filter-12)" x="351.35467" y="269.708309" width="50" height="185"></rect>
            <rect id="r2" stroke="#EFF3F6" fill="url(#linearGradient-13)" x="47.85467" y="237.208309" width="53" height="199"></rect>
            <rect id="r1" stroke="#EFF3F6" fill="url(#linearGradient-14)" x="8.85466998" y="336.208309" width="51" height="119"></rect>
            <path d="M177.35467,111.245513 L177.35467,454.708309 L127.35467,454.708309 L127.35467,180.370187 L177.35467,111.245513 Z" id="r9" stroke="#EFF3F6" fill="url(#linearGradient-15)"></path>
            <path d="M192.35467,148.749152 L242.35467,180.483172 L242.35467,454.708309 L192.35467,454.708309 L192.35467,148.749152 Z" id="r10" stroke="#EFF3F6" fill="url(#linearGradient-16)"></path>
        </g>
    </g>
</svg>
  )
}

export default LayoutHOC(App);