import { lazy } from "react";

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import("../pages/Dashboard"));
const Forms = lazy(() => import("../pages/Forms"));
const Cards = lazy(() => import("../pages/Cards"));
const Charts = lazy(() => import("../pages/Charts"));
const Buttons = lazy(() => import("../pages/Buttons"));
const Modals = lazy(() => import("../pages/Modals"));
const Tables = lazy(() => import("../pages/Tables"));
const Page404 = lazy(() => import("../pages/404"));
const Blank = lazy(() => import("../pages/Blank"));
// Stock pages
// Hizmet ve Ürünler pages
const HUIndex = lazy(() => import("../pages/stok/hizmet_ve_urunler/HUIndex"));
const HUDetay = lazy(() => import("../pages/stok/hizmet_ve_urunler/HUDetay"));
const HUEkleDuzenle = lazy(() =>
  import("../pages/stok/hizmet_ve_urunler/HUEkleDuzenle")
);
// Depo pages
const DepoIndex = lazy(() => import("../pages/stok/depo/DepoIndex"));
const DepoDetay = lazy(() => import("../pages/stok/depo/DepoDetay"));
const DepoEkleDuzenle = lazy(() =>
  import("../pages/stok/depo/DepoEkleDüzenle")
);
// Sipariş pages
const SiparisIndex = lazy(() => import("../pages/stok/siparis/SiparisIndex"));
const SiparisDetay = lazy(() => import("../pages/stok/siparis/SiparisDetay"));
const SiparisEkleDuzenle = lazy(() =>
  import("../pages/stok/siparis/SiparisEkleDuzenle")
);

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: "/dashboard", // the url
    component: Dashboard // view rendered
  },
  {
    path: "/forms",
    component: Forms
  },
  {
    path: "/cards",
    component: Cards
  },
  {
    path: "/charts",
    component: Charts
  },
  {
    path: "/buttons",
    component: Buttons
  },
  {
    path: "/modals",
    component: Modals
  },
  {
    path: "/tables",
    component: Tables
  },
  {
    path: "/404",
    component: Page404
  },
  {
    path: "/blank",
    component: Blank
  },
  {
    path: "/hizmet_ve_urunler",
    component: HUIndex
  },
  {
    path: "/hizmet_ve_urunler/:id/detay",
    component: HUDetay
  },
  {
    path: "/hizmet_ve_urunler/ekle",
    component: HUEkleDuzenle
  },
  {
    path: "/hizmet_ve_urunler/:id/duzenle",
    component: HUEkleDuzenle
  },
  {
    path: "/depo",
    component: DepoIndex
  },
  {
    path: "/depo/:id/detay",
    component: DepoDetay
  },
  {
    path: "/depo/ekle",
    component: DepoEkleDuzenle
  },
  {
    path: "/depo/:id/duzenle",
    component: DepoEkleDuzenle
  },
  {
    path: "/siparis",
    component: SiparisIndex
  },
  {
    path: "/siparis/:id/detay",
    component: SiparisDetay
  },
  {
    path: "/siparis/ekle",
    component: SiparisEkleDuzenle
  },
  {
    path: "/siparis/:id/duzenle",
    component: SiparisEkleDuzenle
  }
];

export default routes;
