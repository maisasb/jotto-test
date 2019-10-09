import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

/**
 * Run before tests
 * create-react-app roda este arquivo antes dos testes
 */

Enzyme.configure({ adapter: new EnzymeAdapter() });