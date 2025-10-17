n.d(t, { g: () => s }), n(388685);
var r = n(647438),
    i = n(100568),
    a = n(417865),
    l = n(665379),
    o = n(86419);
function s(e) {
    let { dragRef: t, dropRef: n, index: s, widgetType: c, game: u } = e,
        d = "GAME_COVER_".concat(c),
        f = r.useCallback(
            (e, t) => {
                (0, o.Eq)(c, e, t);
            },
            [c],
        ),
        [{ isDragging: g }, p, m] = (0, i.c)({
            type: d,
            item: {
                index: s,
                id: u.applicationId,
                itemType: "GAME_COVER",
                gameName: u.gameName,
                imageSrc: u.imageSrc,
            },
            collect: (e) => ({
                handlerId: e.getHandlerId(),
                isDragging: e.isDragging(),
            }),
        });
    r.useEffect(() => {
        m((0, l.r)(), { captureDraggingState: !0 });
    }, [m]);
    let [{ dragSourcePosition: b }, h] = (0, a.L)({
        accept: d,
        drop: (e) => {
            let t = e.index;
            t !== s && (f(t, s), (e.index = s));
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
        p(t),
        h(n),
        {
            isDragging: g,
            dragSourcePosition: b,
        }
    );
}
