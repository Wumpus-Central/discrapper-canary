d.d(t, { t: () => s });
var i = d(287822),
    e = d(898369),
    c = { primary: "IncodeButtonPrimary", secondary: "IncodeButtonSecondary", link: "IncodeButtonLink" },
    a = { L: "IncodeButtonL", M: "IncodeButtonM", S: "IncodeButtonS", inline: "IncodeButtonInline" },
    s = (0, i.a)((l, t) => {
        let {
                isLoading: d = !1,
                variant: s = "primary",
                size: n = "L",
                icon: Z,
                class: b,
                type: m = "button",
                children: o,
                disabled: u,
                ...h
            } = l,
            W = !o && !!Z,
            G = d && "L" === n;
        return (0, i.v)("button", {
            ref: t,
            ...h,
            class: (0, e.n)(
                "IncodeButton",
                c[s],
                a[n],
                G ? "IncodeButtonLoading" : "",
                W ? "IncodeButtonIconOnly" : "",
                b,
            ),
            disabled: u || G,
            "aria-busy": G || void 0,
            type: m,
            children: G
                ? (0, i.v)(i.x, {
                      children: [
                          (0, i.v)(e.t, { size: 30 }),
                          o ? (0, i.v)("span", { class: "IncodeButtonLoadingLabel", children: o }) : null,
                      ],
                  })
                : W
                  ? Z
                  : Z
                    ? (0, i.v)(i.x, { children: [o, Z] })
                    : o,
        });
    });
