d.d(t, { n: () => a, r: () => c, t: () => Z });
var i = d(287822),
    e = new Set([0, 2, 4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 80, 96, 104, 120, 200]),
    c = ({ size: l, className: t, direction: d = "vertical" }) => {
        if (void 0 === l) return (0, i.v)("div", { class: `IncodeSpacerFlex ${t || ""}` });
        if (!("horizontal" === d ? "w" : "vertical" === d ? "h" : void 0))
            return (0, i.v)("div", { class: `${t || ""}` });
        if ("number" == typeof l && e.has(l))
            return (0, i.v)("div", {
                class: `${"horizontal" === d ? ({ 0: "IncodeSpacerHorizontal0", 2: "IncodeSpacerHorizontal2", 4: "IncodeSpacerHorizontal4", 8: "IncodeSpacerHorizontal8", 12: "IncodeSpacerHorizontal12", 16: "IncodeSpacerHorizontal16", 20: "IncodeSpacerHorizontal20", 24: "IncodeSpacerHorizontal24", 32: "IncodeSpacerHorizontal32", 40: "IncodeSpacerHorizontal40", 48: "IncodeSpacerHorizontal48", 64: "IncodeSpacerHorizontal64", 80: "IncodeSpacerHorizontal80", 96: "IncodeSpacerHorizontal96", 104: "IncodeSpacerHorizontal104", 120: "IncodeSpacerHorizontal120", 200: "IncodeSpacerHorizontal200" })[l] : ({ 0: "IncodeSpacerVertical0", 2: "IncodeSpacerVertical2", 4: "IncodeSpacerVertical4", 8: "IncodeSpacerVertical8", 12: "IncodeSpacerVertical12", 16: "IncodeSpacerVertical16", 20: "IncodeSpacerVertical20", 24: "IncodeSpacerVertical24", 32: "IncodeSpacerVertical32", 40: "IncodeSpacerVertical40", 48: "IncodeSpacerVertical48", 64: "IncodeSpacerVertical64", 80: "IncodeSpacerVertical80", 96: "IncodeSpacerVertical96", 104: "IncodeSpacerVertical104", 120: "IncodeSpacerVertical120", 200: "IncodeSpacerVertical200" })[l]} ${t || ""}`,
            });
        return (0, i.v)("div", { class: `${t || ""}` });
    },
    a = (...l) => {
        let t = [];
        for (let d of l)
            if (d) {
                if ("string" == typeof d) t.push(d);
                else if ("object" == typeof d) for (let [l, i] of Object.entries(d)) i && t.push(l);
            }
        return t.join(" ");
    },
    s = ({ size: l, className: t }) =>
        (0, i.v)("svg", {
            width: l,
            height: l,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: a("IncodeLoadingIconPrimaryIcon", t),
            "aria-hidden": "true",
            children: (0, i.v)("path", {
                d: "M28.1614 15.2837C29.453 15.2837 30.5186 14.2304 30.3181 12.9545C30.1344 11.7862 29.8129 10.6411 29.3582 9.54344C28.6044 7.72356 27.4995 6.06997 26.1066 4.67709C24.7137 3.28421 23.0601 2.17932 21.2403 1.4255C20.1426 0.970841 18.9974 0.649265 17.8292 0.46563C16.5533 0.265073 15.5 1.33073 15.5 2.62232C15.5 3.91391 16.5601 4.93461 17.8187 5.22473C18.3748 5.35291 18.9206 5.52729 19.4503 5.74672C20.7028 6.26548 21.8407 7.02585 22.7993 7.98441C23.7578 8.94296 24.5182 10.0809 25.037 11.3333C25.2564 11.8631 25.4308 12.4089 25.559 12.965C25.8491 14.2236 26.8698 15.2837 28.1614 15.2837Z",
            }),
        }),
    n = ({ size: l, className: t }) =>
        (0, i.v)("svg", {
            width: l,
            height: l,
            viewBox: "0 0 31 31",
            fill: "none",
            xmlns: "http://www.w3.org/2000/svg",
            class: a("IncodeLoadingIconSecondaryIcon", t),
            "aria-hidden": "true",
            children: [
                (0, i.v)("title", { children: "Spinner Outer part" }),
                (0, i.v)("path", {
                    d: "M30.5 15.2837C30.5 23.568 23.7843 30.2837 15.5 30.2837C7.21573 30.2837 0.5 23.568 0.5 15.2837C0.5 6.99942 7.21573 0.283691 15.5 0.283691C23.7843 0.283691 30.5 6.99942 30.5 15.2837ZM5.17725 15.2837C5.17725 20.9848 9.7989 25.6064 15.5 25.6064C21.2011 25.6064 25.8227 20.9848 25.8227 15.2837C25.8227 9.5826 21.2011 4.96095 15.5 4.96095C9.7989 4.96095 5.17725 9.5826 5.17725 15.2837Z",
                }),
            ],
        }),
    Z = ({ size: l = 30, secondaryClass: t, primaryClass: d }) => {
        let e = (0, i.l)(null);
        return (
            (0, i.f)(() => {
                if (!e.current) return;
                let l = performance.now() % 1e3;
                e.current.style.animationDelay = `-${l}ms`;
            }, []),
            (0, i.v)("div", {
                ref: e,
                class: "IncodeLoadingIcon",
                children: [
                    (0, i.v)(n, { size: l, className: t }),
                    (0, i.v)("div", {
                        class: "IncodeLoadingIconPrimary",
                        children: (0, i.v)(s, { size: l, className: d }),
                    }),
                ],
            })
        );
    };
