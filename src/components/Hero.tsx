import { Avatar, Button, Space, Tooltip, Typography } from 'antd';
import { DownloadOutlined, GithubOutlined, LinkedinOutlined } from '@ant-design/icons';
import type { Copy, Locale } from '../data/content';
import ConstellationBackground from './ConstellationBackground';
import photo from '../assets/gabriel.jpg';
import resumeEn from '../assets/curriculo-gabriel-merces.pdf';
import resumePt from '../assets/curriculo-gabriel-merces-pt.pdf';

const resumes = {
  pt: { url: resumePt, filename: 'Gabriel-Merces-Curriculo-PT.pdf' },
  en: { url: resumeEn, filename: 'Gabriel-Merces-Resume-EN.pdf' },
};

export default function Hero({ text, locale }: { text: Copy; locale: Locale }) {
  const resume = resumes[locale];
  return (
    <section className="constellation-section hero-layout grid items-center gap-6 min-[601px]:grid-cols-[160px_minmax(0,1fr)] min-[601px]:gap-8 min-[801px]:grid-cols-[192px_minmax(0,1fr)] min-[801px]:gap-12">
      <ConstellationBackground />
      <div className="flex justify-start min-[601px]:justify-center">
        <div className="relative isolate size-28 min-[601px]:size-40 min-[801px]:size-48">
          <div aria-hidden="true" className="pointer-events-none absolute inset-0 -translate-x-0.5 translate-y-0.5 brightness-[0.45]">
            <Avatar src={photo} alt="" className="size-full!" />
          </div>
          <Avatar src={photo} alt={text.photo} className="relative size-full!" />
        </div>
      </div>
      <div>
        <Typography.Title level={1} className="!mt-0 max-[800px]:!text-[30px]">
          {text.headline.start}
          <span className="hero-marker">
            {text.headline.emphasis}
            <svg className="hero-marker-stroke" viewBox="0 0 240 24" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path d="M5 14 C55 7 136 6 234 10" strokeWidth="7" opacity="0.8" />
              <path d="M9 20 C79 13 155 12 231 15" strokeWidth="3" opacity="0.45" />
            </svg>
          </span>
          {text.headline.end}
        </Typography.Title>
        <Typography.Paragraph type="secondary" className="max-w-[680px] !text-[15px] !leading-7 min-[601px]:!text-base">
          {text.intro}
        </Typography.Paragraph>
        <Space size={[10, 12]} wrap>
          <Tooltip title={text.cvNote}>
            <Button type="primary" size="large" href={resume.url} download={resume.filename} icon={<DownloadOutlined />}>
              {text.cv}
            </Button>
          </Tooltip>
          <Button size="large" href="https://www.linkedin.com/in/gabriel-merc%C3%AAs/" target="_blank" rel="noreferrer" icon={<LinkedinOutlined />}>LinkedIn</Button>
          <Button size="large" href="https://github.com/diGit-hub" target="_blank" rel="noreferrer" icon={<GithubOutlined />}>GitHub</Button>
        </Space>
      </div>
    </section>
  );
}
