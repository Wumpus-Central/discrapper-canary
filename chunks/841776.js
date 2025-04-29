n.d(l, { H: () => o });
var t = n(255367),
    r = n(426642),
    a = n(839388);
let o = (e) => {
    let { error: l, uploadErrorCode: n } = e;
    return null == l && null == n
        ? null
        : null != n
          ? (0, t.jsx)(r.Z, {
                error: {
                    type: n,
                    filename: ''
                }
            })
          : (0, t.jsx)('div', {
                className: a.errorBanner,
                children: (0, t.jsx)('p', { children: l })
            });
};
