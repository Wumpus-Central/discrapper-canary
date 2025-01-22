r.d(n, {
    E: function () {
        return h;
    }
});
var i = r(411104);
var a = r(757143);
var o = r(47120);
var s = r(230367),
    l = r(320215),
    u = r(240773),
    c = r(660284),
    d = r(69122),
    f = r(495852);
class p extends f.C {
    now() {
        let e = this.create(),
            n = Date.now();
        return (e.seconds = d.M.from(Math.floor(n / 1000)).toString()), (e.nanos = (n % 1000) * 1000000), e;
    }
    toDate(e) {
        return new Date(1000 * d.M.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1000000));
    }
    fromDate(e) {
        let n = this.create(),
            r = e.getTime();
        return (n.seconds = d.M.from(Math.floor(r / 1000)).toString()), (n.nanos = (r % 1000) * 1000000), n;
    }
    internalJsonWrite(e, n) {
        let r = 1000 * d.M.from(e.seconds).toNumber();
        if (r < Date.parse('0001-01-01T00:00:00Z') || r > Date.parse('9999-12-31T23:59:59Z')) throw Error('Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        if (e.nanos < 0) throw Error('Unable to encode invalid Timestamp to JSON. Nanos must not be negative.');
        let i = 'Z';
        if (e.nanos > 0) {
            let n = (e.nanos + 1000000000).toString().substring(1);
            i = '000000' === n.substring(3) ? '.' + n.substring(0, 3) + 'Z' : '000' === n.substring(6) ? '.' + n.substring(0, 6) + 'Z' : '.' + n + 'Z';
        }
        return new Date(r).toISOString().replace('.000Z', i);
    }
    internalJsonRead(e, n, r) {
        if ('string' != typeof e) throw Error('Unable to parse Timestamp from JSON ' + (0, c.Z)(e) + '.');
        let i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i) throw Error('Unable to parse Timestamp from JSON. Invalid format.');
        let a = Date.parse(i[1] + '-' + i[2] + '-' + i[3] + 'T' + i[4] + ':' + i[5] + ':' + i[6] + (i[8] ? i[8] : 'Z'));
        if (Number.isNaN(a)) throw Error('Unable to parse Timestamp from JSON. Invalid value.');
        if (a < Date.parse('0001-01-01T00:00:00Z') || a > Date.parse('9999-12-31T23:59:59Z')) throw new globalThis.Error('Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        return !r && (r = this.create()), (r.seconds = d.M.from(a / 1000).toString()), (r.nanos = 0), i[7] && (r.nanos = parseInt('1' + i[7] + '0'.repeat(9 - i[7].length)) - 1000000000), r;
    }
    create(e) {
        let n = {
            seconds: '0',
            nanos: 0
        };
        return (
            globalThis.Object.defineProperty(n, u.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, l.l)(this, n, e),
            n
        );
    }
    internalBinaryRead(e, n, r, i) {
        let a = null != i ? i : this.create(),
            o = e.pos + n;
        for (; e.pos < o; ) {
            let [n, i] = e.tag();
            switch (n) {
                case 1:
                    a.seconds = e.int64().toString();
                    break;
                case 2:
                    a.nanos = e.int32();
                    break;
                default:
                    let o = r.readUnknownField;
                    if ('throw' === o) throw new globalThis.Error('Unknown field '.concat(n, ' (wire type ').concat(i, ') for ').concat(this.typeName));
                    let l = e.skip(i);
                    !1 !== o && (!0 === o ? s.z.onRead : o)(this.typeName, a, n, i, l);
            }
        }
        return a;
    }
    internalBinaryWrite(e, n, r) {
        '0' !== e.seconds && n.tag(1, s.TD.Varint).int64(e.seconds), 0 !== e.nanos && n.tag(2, s.TD.Varint).int32(e.nanos);
        let i = r.writeUnknownFields;
        return !1 !== i && (!0 == i ? s.z.onWrite : i)(this.typeName, e, n), n;
    }
    constructor() {
        super('google.protobuf.Timestamp', [
            {
                no: 1,
                name: 'seconds',
                kind: 'scalar',
                T: 3
            },
            {
                no: 2,
                name: 'nanos',
                kind: 'scalar',
                T: 5
            }
        ]);
    }
}
let h = new p();
