var l = t(477900),
    r = t(582128),
    a = t(697530);
let i = r.createContext(null);
t.d(
    n,
    {},
    {
        G: i,
        z: function (e) {
            let { text: n } = e,
                t = r.useContext(i),
                u = null != t ? (0, a.q$)(n, t) : null;
            return null == u
                ? n
                : u.map((e, n) => {
                      let { text: t, highlight: a } = e;
                      return (0, l.jsx)(
                          r.Fragment,
                          { children: a ? (0, l.jsx)("span", { className: "highlight", children: t }) : t },
                          n,
                      );
                  });
        },
    },
);
