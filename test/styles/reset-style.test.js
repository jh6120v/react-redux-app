import renderer from 'react-test-renderer';
import ResetStyle from '../../src/styles/reset-style';

describe('test reset style.', () => {
    it('reset style snap shot', () => {
        const tree = renderer.create(ResetStyle.globalStyle.rules).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
