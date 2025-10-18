n.d(t, { g: () => c }), n(388685);
var r = n(647438),
    i = n(100568),
    a = n(417865),
    l = n(665379),
    o = n(86419);
function c(e) {
    let { dragRef: t, dropRef: n, index: c, widgetType: s, game: u, onReorder: d } = e,
        f = "GAME_COVER_".concat(s),
        g = r.useCallback(
            (e, t) => {
                (0, o.Eq)(s, e, t);
            },
            [s],
        ),
        [{ isDragging: p }, m, b] = (0, i.c)({
            type: f,
            item: {
                index: c,
                id: u.applicationId,
                itemType: "GAME_COVER",
                gameName: u.gameName,
                imageSrc: u.imageSrc,
            },
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
            end: d,
        });
    r.useEffect(() => {
        b((0, l.r)(), { captureDraggingState: !0 });
    }, [b]);
    let [{ dragSourcePosition: h }, v] = (0, a.L)({
        accept: f,
        drop: (e) => {
            let t = e.index;
            t !== c && (g(t, c), (e.index = c));
        },
        collect: (e) => {
            let t = e.getItem(),
                n = null;
            return (
                null != t && e.isOver() && e.canDrop() && (n = t.index),
                {
                    handlerId: e.getHandlerId(),
                    dragSourcePosition: n,
                }
            );
        },
    });
    return (
        m(t),
        v(n),
        {
            isDragging: p,
            dragSourcePosition: h,
        }
    );
}
