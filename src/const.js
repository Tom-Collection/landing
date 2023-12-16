import imageDrip6 from "./assets/drip_6.png"
import imageDrip6V2 from "./assets/drip_6_v2.png"
import imageDrip6Box from "./assets/drip_6_box.png"
import imageDrip9 from "./assets/drip_9.png"


export const items = {
    activeItems: ['drip6', 'drip6Box', 'drip9', 'drip6V2'],
    soon: ['drip6V2'],
    drip6: {
        title: "Drip Coffee Bundle - 6x11г",
        description: "Кофе в дрип-пакетах в прозрачной гибкой упаковке",
        imageUrl: imageDrip6
    },
    drip6V2: {
        title: "Drip Coffee Bundle - 6x11г",
        description: "Кофе в дрип-пакетах в прозрачной гибкой упаковке",
        imageUrl: imageDrip6V2
    },
    drip6Box: {
        title: "Drip Coffee Bundle - 6x11г",
        description: "Кофе в дрип-пакетах в картонной коробке",
        imageUrl: imageDrip6Box
    },
    drip9: {
        title: "Drip Coffee Bundle - 9x11г",
        description: "Кофе в дрип-пакетах в металлизированной гибкой упаковке",
        imageUrl: imageDrip9
    },
}

export const stores = {
    activeStores: ['yandex', 'ozon'],
    yandex: {
        title: 'Yandex.Market',
        items: {
            drip6Url: 'https://market.yandex.ru/product--kofe-v-drip-paketakh-drip-coffee-bundle-100-arabika-upakovka-iz-6-drip-paketov-po-11-gramm/35884892?nid=73841&show-uid=17021471165193451262116001&context=search&text=%D0%BA%D0%BE%D1%84%D0%B5%20%D0%B2%20%D0%B4%D1%80%D0%B8%D0%BF%20%D0%BF%D0%B0%D0%BA%D0%B5%D1%82%D0%B0%D1%85&uniqueId=97600616&sku=102560098479&cpc=VTyT64IBz7MV9uotXBLjHWwCzzqJjCohAPrA-lFQ3w1xEKYD_qlNgGiEFpDQGwNGdUpwLKJXJSpD0QfGBJUDnLyr6NY-uuvExdTfPW4w7HnywV-3j-Q8PW5tuFd7Z_Eb_Bom2_I_qPEj30pyWHCchCQu7vgL8Y1twLz2KHMJfVvRw58rjrF7BA4od9NmcTLrT2gwLlCCJB8%2C&do-waremd5=AEDU8hSzVBGc2WV9bKlGlw&rs=eJw9kLFLQmEUxb-HiJNj-ycNQbgYBIIFD5eWAnGprbfY6r_wEF0qqKXFUt7QUEOgoqCl7z0IcYjgviUIFN4Y1ZCBe985Q8uPy7mHe-69W3eJktW01uVR_KguAy09Lf3IlaEEWgLpmMYgqkknakwtZV9PDL2XkaHb2gX3QHt_B3xF7X0_GaovKmko4cfYUL-jjg_ouaReBvU9uaD_Bk6nD0Xdcv4aEt1D6PYKtfPLOg-6Xc5sItGZY0KcBcMrOFUlgDJkVgqKPqcnwR1-6HxjbpW5GWZR0Rf0zwrQt-k_G__fGD7D4xXpaUH3HngFv6FOODnH2kc3LtGZ9MFjbBsW0XVOedGS3SN8VX0yfYP7t5m7SaYnf-vfpNI%2C',
            drip9Url: 'https://market.yandex.ru/product--kofe-v-drip-paketakh-drip-coffee-bundle-100-arabika-upakovka-iz-6-drip-paketov-po-11-gramm/35884892?sku=102565082445&uniqueId=97600616&hid=16044466&nid=73841&cpa=1&utm_medium=sharing&sponsored=1',
            drip6BoxUrl: 'https://market.yandex.ru/product--kofe-v-drip-paketakh-drip-coffee-bundle-upakovka-iz-6-dripov-po-11-gramm/40811449?sku=102589411332&uniqueId=97600616&hid=16044466&nid=73841&cpa=1&utm_medium=sharing&sponsored=1'
        }
    },
    ozon: {
        title: 'Ozon',
        items: {
            drip6Url: 'https://www.ozon.ru/product/kofe-v-drip-paketah-drip-coffee-bundle-100-arabika-upakovka-iz-6-drip-paketov-po-11-gramm-1332849520/?asb=ngbKEtXhqWEfQb4497ph%252BZyKu2wx%252F0%252BARGVNVYJ8Itg%253D&asb2=T0ejleyLSDzeA-jVZ1y-6-W-dSO1pUeLaiv5i9qywp0zRO5-ppof4Qz3eUfJjWTd&avtc=1&avte=2&avts=1702147388',
            drip9Url: 'https://www.ozon.ru/product/kofe-v-drip-paketah-drip-coffee-bundle-100-arabika-upakovka-iz-9-drip-paketov-po-11-gramm-1332849463/?asb=nccQNoe%252BhG0wvkylfv%252BOpRBkK628F4I8PqQlWnYPzTk%253D&asb2=qDgYTkDqVrjubbYrZfLp-5XitmvaiqY42O3ER27SYCp-BVD5tl4VBU71PkUDfCkP&avtc=1&avte=2&avts=1702147407',
            drip6BoxUrl: 'https://ozon.ru/t/X8nNW6a'
        }
    }
}

