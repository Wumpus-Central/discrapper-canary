n.d(t, {
    W: () => u,
    s: () => l
}),
    n(47120),
    n(653041);
var i,
    r = n(192379),
    a = n(392711),
    s = n.n(a);
function o(e, t, n) {
    return (
        t in e
            ? Object.defineProperty(e, t, {
                  value: n,
                  enumerable: !0,
                  configurable: !0,
                  writable: !0
              })
            : (e[t] = n),
        e
    );
}
var l = (function (e) {
    return (e.PAGE = 'PAGE'), (e.GAP = 'GAP'), (e.BACK = 'BACK'), (e.NEXT = 'NEXT'), e;
})({});
class u extends (i = r.PureComponent) {
    getNeighborBounds() {
        let { totalPageCount: e, maxVisiblePages: t, selectedPage: n } = this.props,
            i = Math.ceil(t / 2),
            r = Math.floor(t / 2),
            a = [1, e],
            [s, o] = (a = n <= i ? [1, t] : n > e - r ? [e - t + 1, e] : [n - i + 1, n + r]);
        return [Math.max(s, 1), Math.min(o, e)];
    }
    getPageList() {
        let { totalPageCount: e, selectedPage: t, hideMaxPage: n } = this.props,
            [i, r] = this.getNeighborBounds(),
            a = {
                type: 'BACK',
                key: 'back',
                disabled: 1 === t,
                selected: !1,
                navigateToPage: this.handleBackward
            },
            o = {
                type: 'NEXT',
                key: 'next',
                disabled: t === e,
                selected: !1,
                navigateToPage: this.handleForward
            },
            l = [],
            u = [];
        return (
            i > 1 &&
                ((l = [
                    {
                        type: 'PAGE',
                        key: 'page-1',
                        targetPage: 1,
                        navigateToPage: () => this.handleJump(1)
                    },
                    {
                        type: 'GAP',
                        key: 'left-gap'
                    }
                ]),
                (i += 2)),
            r < e &&
                ((u = [
                    {
                        type: 'GAP',
                        key: 'right-gap'
                    }
                ]),
                n ||
                    u.push({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        navigateToPage: () => this.handleJump(e)
                    }),
                (r -= 2)),
            [
                a,
                ...l,
                ...s()
                    .range(i, r + 1)
                    .map((e) => ({
                        type: 'PAGE',
                        key: 'page-'.concat(e),
                        targetPage: e,
                        selected: e === t,
                        disabled: !1,
                        navigateToPage: () => this.handleJump(e)
                    })),
                ...u,
                o
            ]
        );
    }
    render() {
        let { totalPageCount: e, children: t } = this.props;
        return t({
            pages: this.getPageList(),
            hasMultiplePages: e > 1
        });
    }
    constructor(...e) {
        super(...e),
            o(this, 'changePageTo', (e) => {
                let { selectedPage: t, onPageChange: n } = this.props;
                t !== e && null != n && n(e);
            }),
            o(this, 'handleForward', () => {
                this.changePageTo(Math.min(this.props.selectedPage + 1, this.props.totalPageCount));
            }),
            o(this, 'handleBackward', () => {
                this.changePageTo(Math.max(this.props.selectedPage - 1, 1));
            }),
            o(this, 'handleJump', (e) => {
                this.changePageTo(e);
            });
    }
}
o(u, 'defaultProps', {
    maxVisiblePages: 9,
    hideMaxPage: !1
});
