import { InputQuantity } from '@/modules/home/components';
import { render, fireEvent } from '@testing-library/vue';
import { MockProducts } from '@/modules/home/__mocks__';

const mockProduct = MockProducts[0].products[0];

const renderInputQuantity = () => {
  return render(InputQuantity, {
    propsData: { product: mockProduct }
  });
};

describe('InputQuantity', () => {
  it('should emit correct event on increment button click', async () => {
    const { getByTestId, emitted } = renderInputQuantity();

    const incrementButton = getByTestId('increment-button');
    await fireEvent.click(incrementButton);

    expect(emitted()['emit-value']).toBeTruthy();
  });

  it('should emit correct event on decrement button click', async () => {
    const { getByTestId, emitted } = renderInputQuantity();

    const incrementButton = getByTestId('increment-button');
    await fireEvent.click(incrementButton);
    const decrementButton = getByTestId('decrement-button');
    await fireEvent.click(decrementButton);

    expect(emitted()['emit-value']).toBeTruthy();
  });
});
