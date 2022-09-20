import { AppBar } from '@/modules/home/components';
import { render } from '@testing-library/vue';

const renderAppBar = () => {
  return render(AppBar);
};

describe('AppBar', () => {
  it('should render correct component', () => {
    const { getByTestId } = renderAppBar();

    const currentDay = getByTestId('current-day');
    expect(currentDay).toBeTruthy();
  });
});
