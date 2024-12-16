
import { Section } from './shared/Section';
import { TeamMember } from './shared/TeamMember';

const teamMembers = [
  {
    name: 'Shady abdel fattah',
    title: 'Chief Executive Officer',
    email: 'shady@vision-metalworks.com',
    imageUrl: 'https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750371/TEST_DESOKY/Image1_rdjpa0.png'
  },
  {
    name: 'Amir Zein',
    title: 'Commercial Director',
    email: 'amir@vision-metalworks.com',
    imageUrl: 'https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750376/TEST_DESOKY/Picture_jz1xmz.png'
  },
  {
    name: 'Mohamed Hawas',
    title: 'Sales Manager',
    email: 'mohamed@vision-metalworks.com',
    imageUrl: 'https://res.cloudinary.com/dl0ivqknv/image/upload/v1733750365/TEST_DESOKY/Image_flozdy.png'
  }
];

export function Team() {
  return (
    <Section id="team" bgColor="white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12">Management Team</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member) => (
            <TeamMember key={member.email} {...member} />
          ))}
        </div>
      </div>
    </Section>
  );
}