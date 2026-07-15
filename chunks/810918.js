t.d(n, { HomeScreen: () => m });
var l = t(529058),
    o = t(287822),
    a = t(450139),
    i = t(898369);
t(727859);
var s = t(787146),
    d = t(157705),
    r = t(843641);
function c(e, n) {
    let [t, ...l] = Array.from(e);
    return t ? `${t.toLocaleUpperCase(n)}${l.join("")}` : e;
}
function C(e) {
    let [, n] = e.split("-");
    if (n && /^[A-Z]{2}$/.test(n)) return n;
    let t = Array.from((0, l.s)(e)).map((e) => e.codePointAt(0));
    if (2 !== t.length) return null;
    let o = t.map((e) => (!e || e < 127462 || e > 127487 ? null : String.fromCharCode(e - 127462 + 65)));
    return o.some((e) => null === e) ? null : o.join("");
}
async function u(e, n) {
    await e(n), "u" > typeof document && (document.documentElement.lang = n);
}
function g() {
    let e,
        n,
        { i18n: t } = (0, l.n)(),
        a = t.language || "en",
        i = (0, o.d)(() => {
            let e;
            return (
                (e = [...new Set(l.c)].map((e) => ({
                    value: e,
                    label: (function (e, n) {
                        let t = (0, l.s)(e),
                            [o, a] = e.split("-"),
                            i = o || e,
                            s = c(new Intl.DisplayNames([n, "en"], { type: "language" }).of(i) ?? i, n);
                        if (a && !/^[A-Z]{2}$/.test(a))
                            return `${t} ${c(new Intl.DisplayNames([n, "en"], { type: "language" }).of(e) ?? e, n)}`;
                        if (a) return `${t} ${s} (${new Intl.DisplayNames([n, "en"], { type: "region" }).of(a) ?? a})`;
                        let d = C(e);
                        return d ? `${t} ${s} (${d})` : `${t} ${s}`;
                    })(e, a),
                    ariaLabel: (function (e, n) {
                        let [t, l] = e.split("-"),
                            o = t || e,
                            a = c(new Intl.DisplayNames([n, "en"], { type: "language" }).of(o) ?? o, n);
                        if (l && !/^[A-Z]{2}$/.test(l))
                            return c(new Intl.DisplayNames([n, "en"], { type: "language" }).of(e) ?? e, n);
                        if (l) return `${a} (${new Intl.DisplayNames([n, "en"], { type: "region" }).of(l) ?? l})`;
                        let i = C(e);
                        return i ? `${a} (${i})` : a;
                    })(e, a),
                }))).sort((e, n) => e.label.localeCompare(n.label)),
                e
            );
        }, [a]);
    return {
        selectedLanguage: a,
        selectedMainLanguageLabel:
            ((e = a.split("-")[0] || a),
            (n = C(a)),
            `${"u" > typeof Intl && void 0 !== Intl.DisplayNames ? c(new Intl.DisplayNames([a, "en"], { type: "language" }).of(e) ?? e, a) : c(e, a)}${n ? ` (${n})` : ""}`),
        selectedMainLanguageEmoji: (0, l.s)(a),
        languageOptions: i,
        changeLanguage: (e) => u(t.changeLanguage.bind(t), e),
    };
}
function h({ onClose: e }) {
    let { t: n } = (0, l.n)(),
        { selectedLanguage: t, languageOptions: a, changeLanguage: c } = g(),
        C = (0, o.l)(null);
    return (
        (0, o._)(() => {
            C.current?.focus();
        }, []),
        (0, o.v)("section", {
            class: "IncodeHomeSettingsContainer",
            children: [
                (0, o.v)("div", {
                    class: "IncodeHomeSettingsBody",
                    children: [
                        (0, o.v)("h1", {
                            ref: C,
                            id: "incode-modal-title",
                            class: "IncodeHomeSettingsTitle",
                            tabIndex: -1,
                            children: n("settings.settings"),
                        }),
                        (0, o.v)(i.r, { size: 32 }),
                        (0, o.v)("div", {
                            class: "IncodeHomeSettingsBodyContent",
                            children: (0, o.v)(r.t, {
                                id: "home-language",
                                label: n("v2.settings.language"),
                                value: t,
                                options: a,
                                onChange: async (e) => {
                                    await c(e);
                                },
                                searchable: !0,
                                "data-testid": "home-language-select",
                            }),
                        }),
                    ],
                }),
                (0, o.v)("div", {
                    class: "IncodeHomeSettingsFooter",
                    children: (0, o.v)(s.t, {
                        onClick: e,
                        "data-testid": "home-settings-done-button",
                        children: n("settings.done"),
                    }),
                }),
                (0, o.v)(d.t.Close, {
                    "aria-label": n("settings.close"),
                    "data-testid": "home-settings-close-button",
                    onClick: e,
                }),
            ],
        })
    );
}
function v() {
    return (0, o.v)("svg", {
        width: "30",
        height: "30",
        viewBox: "0 0 30 30",
        fill: "none",
        xmlns: "http://www.w3.org/2000/svg",
        "aria-hidden": "true",
        children: [
            (0, o.v)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M4.5 15.3187C4.5 14.1593 5.44055 13.2188 6.6 13.2188C7.75945 13.2188 8.7 14.1593 8.7 15.3187C8.7 16.4782 7.75945 17.4187 6.6 17.4187C5.44055 17.4187 4.5 16.4782 4.5 15.3187Z",
                fill: "currentColor",
            }),
            (0, o.v)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M12.9004 15.3187C12.9004 14.1593 13.841 13.2188 15.0004 13.2188C16.1598 13.2188 17.1004 14.1593 17.1004 15.3187C17.1004 16.4782 16.1598 17.4187 15.0004 17.4187C13.841 17.4187 12.9004 16.4782 12.9004 15.3187Z",
                fill: "currentColor",
            }),
            (0, o.v)("path", {
                fillRule: "evenodd",
                clipRule: "evenodd",
                d: "M21.2998 15.3187C21.2998 14.1593 22.2404 13.2188 23.3998 13.2188C24.5592 13.2188 25.4998 14.1593 25.4998 15.3187C25.4998 16.4782 24.5592 17.4187 23.3998 17.4187C22.2404 17.4187 21.2998 16.4782 21.2998 15.3187Z",
                fill: "currentColor",
            }),
        ],
    });
}
function m({ onContinue: e, isContinueLoading: n }) {
    let { t } = (0, l.n)(),
        { logoSrc: r, subtitle: c } = (0, a.n)(),
        { selectedMainLanguageLabel: C, selectedMainLanguageEmoji: u } = g(),
        p = (0, o.l)(null),
        f = (0, o.l)(null),
        [L, I] = (0, o.p)(!1);
    return (
        (0, o._)(() => {
            p.current?.focus();
        }, [c]),
        (0, o.v)("main", {
            class: "IncodeHome",
            children: [
                (0, o.v)("div", {
                    class: "IncodeHomeContent",
                    children: [
                        (0, o.v)("header", {
                            class: "IncodeHomeHeader",
                            children: [
                                (0, o.v)("div", {
                                    class: "IncodeHomeLanguage",
                                    children: [
                                        (0, o.v)("p", {
                                            class: "IncodeHomeLanguageLabel",
                                            children: t("home.language"),
                                        }),
                                        (0, o.v)(i.r, { size: 8 }),
                                        (0, o.v)("p", {
                                            class: "IncodeHomeLanguageValue",
                                            children: [
                                                (0, o.v)("span", { "aria-hidden": "true", children: [u, " "] }),
                                                C,
                                            ],
                                        }),
                                    ],
                                }),
                                (0, o.v)("button", {
                                    type: "button",
                                    class: "IncodeHomeSettingsButton",
                                    onClick: () => I(!0),
                                    "aria-label": t("home.goToSettings"),
                                    "data-testid": "home-settings-button",
                                    children: (0, o.v)(v, {}),
                                }),
                            ],
                        }),
                        (0, o.v)("div", {
                            class: "IncodeHomeCenterSection",
                            children: [
                                (0, o.v)("div", {
                                    class: "IncodeHomeLogoContainer",
                                    children: (0, o.v)("img", {
                                        src:
                                            r ||
                                            "data:image/svg+xml,%3csvg%20width='76'%20height='20'%20viewBox='0%200%2076%2020'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20fill-rule='evenodd'%20clip-rule='evenodd'%20d='M40.1687%206.01811C42.2312%206.01811%2043.7927%206.59655%2044.8446%207.76024C45.8919%208.91831%2046.4126%2010.5865%2046.4126%2012.7583C46.4126%2014.93%2045.8748%2016.6105%2044.794%2017.7944C43.7102%2018.9815%2042.1729%2019.5735%2040.1937%2019.5735C38.1479%2019.5735%2036.5973%2018.99%2035.5546%2017.8187L35.4273%2017.6701C34.4729%2016.5101%2033.9984%2014.871%2033.9984%2012.7583C33.9984%208.28671%2036.0703%206.01811%2040.1687%206.01811ZM69.1127%206.01781C71.1144%206.01781%2072.5953%206.66904%2073.5373%207.97333C74.4288%209.2077%2074.8837%2010.9053%2074.9066%2013.0629L74.9058%2013.5242H66.1149C66.2174%2014.6334%2066.5602%2015.4734%2067.141%2016.0538C67.7488%2016.662%2068.6195%2016.9679%2069.7639%2016.9679C70.5188%2016.9679%2071.2373%2016.8742%2071.921%2016.6862C72.6048%2016.4995%2073.2105%2016.2581%2073.735%2015.9646L73.9814%2015.8267V18.666L73.8821%2018.7093C72.5607%2019.286%2071.0464%2019.5732%2069.3379%2019.5732C67.4088%2019.5732%2065.8853%2018.986%2064.7769%2017.8093C63.6699%2016.6348%2063.1183%2014.9722%2063.1183%2012.833C63.1183%2010.6451%2063.6389%208.96055%2064.6862%207.78517C65.7359%206.60632%2067.2157%206.01781%2069.1127%206.01781ZM60.3976%201.06738V16.3832C60.3976%2017.0998%2060.0996%2017.7092%2059.5124%2018.198C58.9425%2018.6724%2058.2282%2019.0207%2057.3718%2019.2435C56.5257%2019.4635%2055.6531%2019.5731%2054.7534%2019.5731C52.9298%2019.5731%2051.4237%2019.056%2050.2406%2018.0202C49.0485%2016.9752%2048.4588%2015.1678%2048.4588%2012.6072C48.4588%2010.5545%2048.9627%208.9421%2049.9753%207.77411C50.9938%206.60175%2052.4982%206.01774%2054.4782%206.01774C54.9416%206.01774%2055.4735%206.07665%2056.0742%206.19449C56.582%206.296%2057.0453%206.43849%2057.4648%206.62252V1.06738H60.3976ZM27.911%206.04223C29.2828%206.04223%2030.5881%206.29619%2031.8264%206.80393L31.9291%206.84604V9.55797L31.6992%209.46109C30.4503%208.93473%2029.3127%208.67257%2028.2863%208.67257C27.0102%208.67257%2026.0684%208.98809%2025.4521%209.61162C24.8366%2010.2352%2024.5242%2011.2397%2024.5242%2012.6331C24.5242%2014.0959%2024.8298%2015.1535%2025.4314%2015.8092C26.029%2016.4619%2027.002%2016.7923%2028.3613%2016.7923C29.4706%2016.7923%2030.589%2016.5234%2031.7164%2015.9842L31.9534%2015.8708V18.5903L31.8552%2018.634C30.6349%2019.1773%2029.3283%2019.4483%2027.936%2019.4483C26.2154%2019.4483%2024.7637%2018.9753%2023.5868%2018.0285L23.4123%2017.8829L23.2796%2017.7636C22.1516%2016.7067%2021.5914%2015.0592%2021.5914%2012.8332C21.5914%2010.4557%2022.186%208.72379%2023.3849%207.64725C24.5757%206.57726%2026.0871%206.04223%2027.911%206.04223ZM4.11045%206.39262L4.13613%2019.1987H1.15293V6.39262H4.11045ZM13.5766%206.0423C15.365%206.0423%2016.6948%206.41948%2017.5636%207.18368C18.4372%207.95269%2018.8706%209.13902%2018.8706%2010.7331V19.1984H15.9127V11.0838C15.9127%209.42945%2014.9988%208.62337%2013.1013%208.62337C12.3086%208.62337%2011.5458%208.73548%2010.8133%208.95959L10.5401%209.04888V19.1984H7.58147V7.40579L7.67177%207.35974C8.43481%206.97061%209.36013%206.65415%2010.4506%206.40815L10.8116%206.33134C11.7692%206.13867%2012.6905%206.0423%2013.5766%206.0423ZM40.1687%208.5477C39.0014%208.5477%2038.1814%208.89722%2037.6896%209.59114C37.1869%2010.3012%2036.932%2011.3564%2036.932%2012.7583C36.932%2014.1602%2037.1948%2015.223%2037.7142%2015.9499C38.2224%2016.6613%2039.0345%2017.0182%2040.1687%2017.0182C42.3685%2017.0182%2043.4555%2015.6249%2043.4555%2012.7583C43.4555%2011.325%2043.1888%2010.2632%2042.6636%209.57056C42.1472%208.89036%2041.3203%208.5477%2040.1687%208.5477ZM54.8535%208.59807C52.5835%208.59807%2051.4659%209.9271%2051.4659%2012.6579C51.4659%2014.0276%2051.7253%2015.0917%2052.2391%2015.8527C52.7378%2016.5945%2053.6185%2016.9678%2054.9035%2016.9678C55.6556%2016.9678%2056.2834%2016.8792%2056.7876%2016.7028C57.2156%2016.553%2057.4279%2016.378%2057.4604%2016.186L57.4648%2016.1332V9.25404L57.2778%209.15611C56.9611%208.99923%2056.6189%208.87406%2056.2512%208.78123C55.7705%208.65917%2055.3045%208.59807%2054.8535%208.59807ZM69.0377%208.49888C68.192%208.49888%2067.5412%208.71795%2067.0743%209.15366C66.6631%209.5374%2066.3731%2010.1684%2066.2101%2011.0498L66.1771%2011.2425H71.8784L71.8489%2011.0453C71.7111%2010.208%2071.4421%209.58986%2071.0461%209.18626C70.5969%208.72981%2069.9303%208.49888%2069.0377%208.49888ZM4.21085%201.94156V4.64764H1.07715V1.94156H4.21085Z'%20fill='%23006AFF'/%3e%3c/svg%3e",
                                        alt: t("home.logo"),
                                        class: "IncodeHomeLogo",
                                        "data-testid": "home-logo",
                                        "aria-hidden": "true",
                                    }),
                                }),
                                c
                                    ? (0, o.v)("h2", { ref: p, class: "IncodeHomeSubtitle", tabIndex: -1, children: c })
                                    : null,
                            ],
                        }),
                        (0, o.v)(s.t, {
                            ref: f,
                            onClick: () => {
                                e();
                            },
                            isLoading: n,
                            class: "IncodeHomeStartButton",
                            "data-testid": "home-start-button",
                            children: t("home.start"),
                        }),
                    ],
                }),
                (0, o.v)(d.t.Root, {
                    open: L,
                    onOpenChange: (e) => I(e),
                    returnFocusRef: f,
                    manageInitialFocus: !1,
                    class: "IncodeHomeSettingsModal",
                    children: (0, o.v)(d.t.Content, { children: (0, o.v)(h, { onClose: () => I(!1) }) }),
                }),
            ],
        })
    );
}
t(599452);
