import { createActionCreator } from '../../src/commons/utils';

describe('test utils', () => {
    it('test createActionCreator type', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        expect(test.type).toEqual('@@NAMESPACE/TEST');
    });

    it('test createActionCreator func', () => {
        const actionCreator = createActionCreator('@@NAMESPACE');
        const test = actionCreator('TEST');

        const fakeTestCreator = () => ({
            type: '@@NAMESPACE/TEST',
            payload: {}
        });

        expect(JSON.stringify(test())).toEqual(JSON.stringify(fakeTestCreator()));
    });

    it('rendered lazily', async () => {

    });
});
