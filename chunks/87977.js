Object.defineProperty(t, '__esModule', { value: !0 }), (t.Raised = void 0);
var i = o(n(192379)),
    r = o(n(476400)),
    a = o(n(723184)),
    s = o(n(429867));
function o(e) {
    return e && e.__esModule ? e : { default: e };
}
var l = (t.Raised = function (e) {
    var t = e.zDepth,
        n = e.radius,
        r = e.background,
        o = e.children,
        l = e.styles,
        u = void 0 === l ? {} : l,
        c = (0, a.default)(
            (0, s.default)(
                {
                    default: {
                        wrap: {
                            position: 'relative',
                            display: 'inline-block'
                        },
                        content: { position: 'relative' },
                        bg: {
                            absolute: '0px 0px 0px 0px',
                            boxShadow: '0 ' + t + 'px ' + 4 * t + 'px rgba(0,0,0,.24)',
                            borderRadius: n,
                            background: r
                        }
                    },
                    'zDepth-0': { bg: { boxShadow: 'none' } },
                    'zDepth-1': { bg: { boxShadow: '0 2px 10px rgba(0,0,0,.12), 0 2px 5px rgba(0,0,0,.16)' } },
                    'zDepth-2': { bg: { boxShadow: '0 6px 20px rgba(0,0,0,.19), 0 8px 17px rgba(0,0,0,.2)' } },
                    'zDepth-3': { bg: { boxShadow: '0 17px 50px rgba(0,0,0,.19), 0 12px 15px rgba(0,0,0,.24)' } },
                    'zDepth-4': { bg: { boxShadow: '0 25px 55px rgba(0,0,0,.21), 0 16px 28px rgba(0,0,0,.22)' } },
                    'zDepth-5': { bg: { boxShadow: '0 40px 77px rgba(0,0,0,.22), 0 27px 24px rgba(0,0,0,.2)' } },
                    square: { bg: { borderRadius: '0' } },
                    circle: { bg: { borderRadius: '50%' } }
                },
                u
            ),
            { 'zDepth-1': 1 === t }
        );
    return i.default.createElement('div', { style: c.wrap }, i.default.createElement('div', { style: c.bg }), i.default.createElement('div', { style: c.content }, o));
});
(l.propTypes = {
    background: r.default.string,
    zDepth: r.default.oneOf([0, 1, 2, 3, 4, 5]),
    radius: r.default.number,
    styles: r.default.object
}),
    (l.defaultProps = {
        background: '#fff',
        zDepth: 1,
        radius: 2,
        styles: {}
    }),
    (t.default = l);
