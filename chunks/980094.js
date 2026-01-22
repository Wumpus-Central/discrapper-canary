n.d(t, { Q: () => l });
var r = n(627968);
n(64700);
var i = n(397927),
    a = n(665711),
    s = n(108788);
let o = 20,
    l = (e) => {
        let { application: t, iconSize: n = o } = e;
        return null == t
            ? null
            : (0, r.jsxs)("div", {
                  className: s.k,
                  children: [
                      (0, r.jsx)(a.W, {
                          application: t,
                          iconSize: n,
                      }),
                      (0, r.jsx)(i.Text, {
                          variant: "text-sm/medium",
                          color: "text-muted",
                          children: t.name,
                      }),
                  ],
              });
    };
