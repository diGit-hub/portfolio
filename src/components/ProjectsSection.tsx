import { Card, Col, Row, Space, Tag, Typography } from 'antd';
import { ClockCircleOutlined, CodeOutlined, ExpandAltOutlined, RobotOutlined } from '@ant-design/icons';
import type { Copy, Locale } from '../data/content';
import { projects } from '../data/projects';

interface Props {
  text: Copy;
  locale: Locale;
  onSelect: (index: number) => void;
}

const badgeIcons = {
  inProgress: <ClockCircleOutlined aria-hidden="true" />,
  aiAssisted: <RobotOutlined aria-hidden="true" />,
  noAiCode: <CodeOutlined aria-hidden="true" />,
};

export default function ProjectsSection({ text, locale, onSelect }: Props) {
  return (
    <section id="projetos">
      <div className="section-inset mb-8">
        <Typography.Title level={3} className="!mb-2 !mt-0">{text.projects}</Typography.Title>
        <Typography.Text type="secondary">{text.projectsSub}</Typography.Text>
      </div>
      <Row gutter={[24, 24]}>
        {projects.map((project, index) => (
          <Col xs={24} md={12} key={project.name}>
            <Card
              className="project-card relative flex h-full flex-col overflow-hidden [&>.ant-card-body]:flex-1"
              styles={{ body: { position: 'static' } }}
              cover={
                <div className="project-preview">
                  <div className="project-preview-trigger block w-full">
                    <img className="project-preview-image block aspect-video w-full object-cover object-top" src={project.preview} alt={`${project.name} — ${project[locale].type}`} loading="lazy" width={1536} height={864} />
                    <span className="project-preview-open" aria-hidden="true"><ExpandAltOutlined /></span>
                  </div>
                  <div className="project-preview-badges">
                    {project.badges.map(badge => (
                      <Tag key={badge} icon={badgeIcons[badge]} className={`project-preview-badge project-preview-badge-${badge}`}>{text[badge]}</Tag>
                    ))}
                  </div>
                </div>
              }
            >
              <button
                type="button"
                className="project-card-trigger absolute inset-0 z-10 size-full cursor-pointer rounded-[inherit] border-0 bg-transparent p-0 focus-visible:outline-2 focus-visible:-outline-offset-2 focus-visible:outline-[#1677ff]"
                onClick={() => onSelect(index)}
                aria-label={`${text.view} ${project.name}`}
                aria-haspopup="dialog"
              />
              <Card.Meta title={project.name} description={project[locale].type} />
              <Typography.Paragraph type="secondary" className="!mt-4">{project[locale].summary}</Typography.Paragraph>
              <Space size={[0, 8]} wrap>{project.stack.map(tag => <Tag key={tag}>{tag}</Tag>)}</Space>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
}
