import { Promotions } from 'entities/MainComponents';

export interface AboutProps {
  className?: string;
}
export const About = (props: AboutProps) => {

  return (
    <div>
      <Promotions/>
    </div>
  )
};