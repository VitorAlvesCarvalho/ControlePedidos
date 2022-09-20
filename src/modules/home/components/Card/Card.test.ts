import { Card } from '@/modules/home/components';
import { render } from '@testing-library/vue';
import { MockTables } from '@/modules/home/__mocks__';

const itemTable = MockTables[0];

const renderCard = () => {
  return render(Card, {
    propsData: { itemTable }
  });
};

describe('Card', () => {
  it('should render correct text', () => {
    const { getByText } = renderCard();

    const textCard = getByText('Mesa 1');
    expect(textCard).toBeTruthy();
  });
});
