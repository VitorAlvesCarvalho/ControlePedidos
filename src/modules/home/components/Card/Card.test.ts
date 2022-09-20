import { Card } from '@/modules/home/components';
import { render, fireEvent } from '@testing-library/vue';
import { MockTables } from '@/modules/home/__mocks__';

const mockItemTable = MockTables[0];

const renderCard = () => {
  return render(Card, {
    propsData: { itemTable: mockItemTable }
  });
};

describe('Card', () => {
  it('should render correct text', () => {
    const { getByText } = renderCard();

    const textCard = getByText('Mesa 1');
    expect(textCard).toBeTruthy();
  });

  it('should emit correct event on ordered button click', async () => {
    const { getByTestId, emitted } = renderCard();

    const orderedButton = getByTestId('ordered-button');
    await fireEvent.click(orderedButton);

    expect(emitted()['emit-click']).toBeTruthy();
  });

  it('should emit correct event on payment button click', async () => {
    const { getByTestId, emitted } = renderCard();

    const paymentButton = getByTestId('payment-button');
    await fireEvent.click(paymentButton);

    expect(emitted()['emit-click']).toBeTruthy();
  });
});
