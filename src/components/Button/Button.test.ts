import { Button } from '@/components';
import { render } from '@testing-library/vue';
import '@testing-library/jest-dom';

const renderButton = (pros = {}) => {
  return render(Button, {
    propsData: { text: 'Text Button', ...pros }
  });
};

describe('Button', () => {
  it('should render correct text button', () => {
    const { getByText } = renderButton();

    const button = getByText('Text Button');
    expect(button).toBeTruthy();
  });

  it('should disable button when prop is passed', () => {
    const { getByText } = renderButton({ disabled: true });

    const button = getByText('Text Button');
    expect(button).toHaveAttribute('disabled');
  });
});
