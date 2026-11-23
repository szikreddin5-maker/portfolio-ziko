import React from 'react';
import Head from 'next/head';
import styled from 'styled-components';
import { Layout } from '../layout/Layout';

const Content = styled.section`
  min-height: 58vh;
  max-width: 760px;
  margin: 0 auto;
  padding: 100px 24px;
  text-align: center;
  h1 { color: #f8fafc; font-size: clamp(5rem, 10vw, 9rem); margin-bottom: 16px; }
  p { color: #b7c6d8; font-size: 1.75rem; margin-bottom: 30px; }
  a {
    display: inline-block;
    background: #67e8f9;
    color: #071321;
    border-radius: 10px;
    padding: 13px 22px;
    font-size: 1.45rem;
    font-weight: 600;
  }
  a:hover { background: #a5f3fc; }
`;

export default function NotFound() {
  return (
    <Layout>
      <Head><title>Page not found | Zikreddin Şık</title></Head>
      <Content>
        <h1>404</h1>
        <p>This page isn't here, but there are projects worth exploring.</p>
        <a href="/#projects">Explore projects ↗</a>
      </Content>
    </Layout>
  );
}
