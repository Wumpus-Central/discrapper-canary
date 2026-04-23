"use strict";
function r(e) {
    let t = new Uint8Array(16),
        n = new DataView(t.buffer);
    return (
        n.setUint32(0, 0x30f303fb),
        n.setUint16(4, 35878),
        n.setUint16(6, 20307),
        n.setBigUint64(8, BigInt(e)),
        btoa(String.fromCharCode(...t))
            .replace(/\+/g, "-")
            .replace(/\//g, "_")
            .replace(/=/g, "")
    );
}
n.d(t, { M: () => r }), n(393431), n(532706), n(42231), n(232424), n(949626), n(767709), n(65162), n(508300);
