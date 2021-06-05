import React from "react";
import Footer from "@/components/footer";
import Layout from "@/components/layout";
import PageBanner from "@/components/page-banner";
import ServiceOne from "@/components/service-one";
import ServiceTwo from "@/components/service-two";
import ServiceThree from "@/components/service-three";
import FunfactOne from "@/components/funfact-one";
import TrustedClient from "@/components/trusted-client";
import ClientCarouselOne from "@/components/client-carousel-one";
import MenuContextProvider from "@/context/menu-context";
import SearchContextProvider from "@/context/search-context";
import HeaderOne from "@/components/header-one";

const ServicePage = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout PageTitle="Batavia Crypto Token">
          <HeaderOne />
          <PageBanner title="Batavia Crypto Token" name="Token" />
          <ServiceOne />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default ServicePage;
