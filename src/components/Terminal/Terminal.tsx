import React, { useState, useRef, useEffect } from 'react';
import './Terminal.css';

interface TerminalProps {
  role: 'hacker' | 'defender';
  onCommand?: (command: string) => void;
  disabled?: boolean;
  className?: string;
}

interface TerminalLine {
  type: 'input' | 'output' | 'error';
  content: string;
  timestamp: Date;
}

export const Terminal: React.FC<TerminalProps> = ({
  role,
  onCommand,
  disabled = false,
  className = ''
}) => {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<string[]>([]);
  const [historyIndex, setHistoryIndex] = useState(-1);
  const [lines, setLines] = useState<TerminalLine[]>([
    {
      type: 'output',
      content: `Welcome to Cyber Duel - ${role.toUpperCase()} Terminal`,
      timestamp: new Date()
    },
    {
      type: 'output',
      content: 'Type "help" for available commands',
      timestamp: new Date()
    }
  ]);
  
  const inputRef = useRef<HTMLInputElement>(null);
  const terminalRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    if (terminalRef.current) {
      terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [lines]);

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (disabled) return;

    if (e.key === 'Enter') {
      if (input.trim()) {
        // Add to history
        setHistory(prev => [...prev, input]);
        setHistoryIndex(-1);

        // Add input line
        const newLines = [...lines, {
          type: 'input' as const,
          content: `${role}@cyberduel:~$ ${input}`,
          timestamp: new Date()
        }];

        // Execute command
        if (input.trim().toLowerCase() === 'help') {
          newLines.push({
            type: 'output',
            content: 'Available commands: scan, monitor, help, clear',
            timestamp: new Date()
          });
        } else if (input.trim().toLowerCase() === 'clear') {
          setLines([]);
          setInput('');
          return;
        } else {
          newLines.push({
            type: 'output',
            content: `Executing: ${input}`,
            timestamp: new Date()
          });
          onCommand?.(input);
        }

        setLines(newLines);
        setInput('');
      }
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      if (history.length > 0 && historyIndex < history.length - 1) {
        const newIndex = historyIndex + 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      }
    } else if (e.key === 'ArrowDown') {
      e.preventDefault();
      if (historyIndex > 0) {
        const newIndex = historyIndex - 1;
        setHistoryIndex(newIndex);
        setInput(history[history.length - 1 - newIndex]);
      } else if (historyIndex === 0) {
        setHistoryIndex(-1);
        setInput('');
      }
    }
  };

  return (
    <div className={`terminal-container ${className}`}>
      <div className="terminal-header">
        <div className="terminal-title">
          {role.toUpperCase()} Terminal
        </div>
        <div className="terminal-controls">
          <div className="terminal-dot terminal-dot-red"></div>
          <div className="terminal-dot terminal-dot-yellow"></div>
          <div className="terminal-dot terminal-dot-green"></div>
        </div>
      </div>
      
      <div className="terminal-body" ref={terminalRef}>
        {lines.map((line, index) => (
          <div key={index} className={`terminal-line terminal-line-${line.type}`}>
            {line.content}
          </div>
        ))}
        
        {!disabled && (
          <div className="terminal-input-line">
            <span className="terminal-prompt">{role}@cyberduel:~$ </span>
            <input
              ref={inputRef}
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              className="terminal-input"
              placeholder={disabled ? "Terminal locked" : "Enter command..."}
              disabled={disabled}
              autoFocus
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Terminal;