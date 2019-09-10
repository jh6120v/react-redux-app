import renderer from 'react-test-renderer';
import GlobalStyle from '../../src/styles/global-style';

describe('test global style.', () => {
    it('global style snap shot', () => {
        const tree = renderer.create(GlobalStyle.globalStyle.rules).toJSON();
        expect(tree).toMatchSnapshot();
    });
});
