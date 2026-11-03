import { useState } from 'react';
import { Button, Input, Tooltip, Typography, message } from 'antd';
import { MailOutlined } from '@ant-design/icons';
import type { Copy } from '../data/content';

const email = 'gabriel.merces.dev@gmail.com';

export default function CopyEmailButton({ text }: { text: Copy }) {
  const [messages, contextHolder] = message.useMessage();
  const [manualCopy, setManualCopy] = useState(false);

  async function copyEmail() {
    setManualCopy(false);
    try {
      await navigator.clipboard.writeText(email);
      messages.success({ key: 'copy-email', content: text.emailCopied });
    } catch {
      setManualCopy(true);
    }
  }

  return (
    <div className="flex max-w-full shrink-0 flex-col items-start gap-2 min-[801px]:items-end">
      {contextHolder}
      <Tooltip title={text.copyEmail}>
        <Button type="primary" onClick={copyEmail} icon={<MailOutlined />} aria-label={text.copyEmail}>
          {text.email}
        </Button>
      </Tooltip>
      {manualCopy && (
        <div role="status" className="max-w-72 space-y-2">
          <Typography.Paragraph type="secondary" className="mb-0!">{text.emailCopyError}</Typography.Paragraph>
          <Input aria-label={text.email} value={email} readOnly onFocus={event => event.currentTarget.select()} />
        </div>
      )}
    </div>
  );
}
