import { compute } from ’./ compute ’ ;
describe ( ’ compute ’ , () => { // suite
i t ( ’ should return 0 i f input i s negative ’ , () => {
const r e su l t = compute(−1);
expect ( r e su l t ). toBe (0);
})
i t ( ’ should increment i f input i s positive ’ , () => {
const r e su l t = compute (1);
expect ( r e su l t ). toBe (2);
})
})
