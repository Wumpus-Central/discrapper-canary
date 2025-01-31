n.d(t, { E: () => c }), n(411104), n(757143), n(47120);
var i = n(230367),
    r = n(320215),
    a = n(240773),
    s = n(660284),
    o = n(69122),
    l = n(495852);
class u extends l.C {
    now() {
        let e = this.create(),
            t = Date.now();
        return (e.seconds = o.M.from(Math.floor(t / 1000)).toString()), (e.nanos = (t % 1000) * 1000000), e;
    }
    toDate(e) {
        return new Date(1000 * o.M.from(e.seconds).toNumber() + Math.ceil(e.nanos / 1000000));
    }
    fromDate(e) {
        let t = this.create(),
            n = e.getTime();
        return (t.seconds = o.M.from(Math.floor(n / 1000)).toString()), (t.nanos = (n % 1000) * 1000000), t;
    }
    internalJsonWrite(e, t) {
        let n = 1000 * o.M.from(e.seconds).toNumber();
        if (n < Date.parse('0001-01-01T00:00:00Z') || n > Date.parse('9999-12-31T23:59:59Z')) throw Error('Unable to encode Timestamp to JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        if (e.nanos < 0) throw Error('Unable to encode invalid Timestamp to JSON. Nanos must not be negative.');
        let i = 'Z';
        if (e.nanos > 0) {
            let t = (e.nanos + 1000000000).toString().substring(1);
            i = '000000' === t.substring(3) ? '.' + t.substring(0, 3) + 'Z' : '000' === t.substring(6) ? '.' + t.substring(0, 6) + 'Z' : '.' + t + 'Z';
        }
        return new Date(n).toISOString().replace('.000Z', i);
    }
    internalJsonRead(e, t, n) {
        if ('string' != typeof e) throw Error('Unable to parse Timestamp from JSON ' + (0, s.Z)(e) + '.');
        let i = e.match(/^([0-9]{4})-([0-9]{2})-([0-9]{2})T([0-9]{2}):([0-9]{2}):([0-9]{2})(?:Z|\.([0-9]{3,9})Z|([+-][0-9][0-9]:[0-9][0-9]))$/);
        if (!i) throw Error('Unable to parse Timestamp from JSON. Invalid format.');
        let r = Date.parse(i[1] + '-' + i[2] + '-' + i[3] + 'T' + i[4] + ':' + i[5] + ':' + i[6] + (i[8] ? i[8] : 'Z'));
        if (Number.isNaN(r)) throw Error('Unable to parse Timestamp from JSON. Invalid value.');
        if (r < Date.parse('0001-01-01T00:00:00Z') || r > Date.parse('9999-12-31T23:59:59Z')) throw new globalThis.Error('Unable to parse Timestamp from JSON. Must be from 0001-01-01T00:00:00Z to 9999-12-31T23:59:59Z inclusive.');
        return n || (n = this.create()), (n.seconds = o.M.from(r / 1000).toString()), (n.nanos = 0), i[7] && (n.nanos = parseInt('1' + i[7] + '0'.repeat(9 - i[7].length)) - 1000000000), n;
    }
    create(e) {
        let t = {
            seconds: '0',
            nanos: 0
        };
        return (
            globalThis.Object.defineProperty(t, a.C, {
                enumerable: !1,
                value: this
            }),
            void 0 !== e && (0, r.l)(this, t, e),
            t
        );
    }
    internalBinaryRead(e, t, n, r) {
        let a = null != r ? r : this.create(),
            s = e.pos + t;
        for (; e.pos < s; ) {
            let [t, r] = e.tag();
            switch (t) {
                case 1:
                    a.seconds = e.int64().toString();
                    break;
                case 2:
                    a.nanos = e.int32();
                    break;
                default:
                    let s = n.readUnknownField;
                    if ('throw' === s) throw new globalThis.Error('Unknown field '.concat(t, ' (wire type ').concat(r, ') for ').concat(this.typeName));
                    let o = e.skip(r);
                    !1 !== s && (!0 === s ? i.z.onRead : s)(this.typeName, a, t, r, o);
            }
        }
        return a;
    }
    internalBinaryWrite(e, t, n) {
        '0' !== e.seconds && t.tag(1, i.TD.Varint).int64(e.seconds), 0 !== e.nanos && t.tag(2, i.TD.Varint).int32(e.nanos);
        let r = n.writeUnknownFields;
        return !1 !== r && (!0 == r ? i.z.onWrite : r)(this.typeName, e, t), t;
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
let c = new u();
