import Adapter from 'enzyme-adapter-react-16';
import { configure } from 'enzyme';
// START_HIGHLIGHT
import 'jest-styled-components';
// END_HIGHLIGHT

configure({ adapter: new Adapter() });
