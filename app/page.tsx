'use client';

import CheckboxButton from '@/components/CheckboxButton';
import CopyCode from '@/components/CopyCode';
import RadioButtonGroup from '@/components/RadioButtonGroup';
import { Text, TextField } from '@radix-ui/themes';
import { useCallback, useState } from 'react';

export default function Home() {
  const lang = useState('--js');
  const pckgManager = useState('--use-npm');
  const [options, setOptions] = useState({
    '--tailwind': false,
    '--eslint': false,
    '--app': false,
    '--src-dir': false,
    '--import-alias': false,
  });
  const [importAlias, setImportAlias] = useState('');

  const clickOption = (key: keyof typeof options) => {
    console.log({ key, val: options[key] });
    setOptions({
      ...options,
      [key]: !options[key],
    });
  };

  const alias = useCallback(() => {}, []);

  const optionsCode = useCallback(() => {
    return Object.keys(options).reduce(
      (prev, curr) =>
        options[curr as keyof typeof options] ? prev + ' ' + curr : prev,
      ''
    );
  }, [options]);

  return (
    <div className=" flex flex-col gap-1 p-3 px-6">
      <CopyCode
        text={`npx create-next-app@latest ${pckgManager[0]} ${
          lang[0]
        } ${optionsCode()}${
          options['--import-alias'] ? ' ' + importAlias : ''
        }`}
      />
      <Text>{JSON.stringify(options)}</Text>

      <Text className="pt-5">Initialize as a -- project </Text>
      <RadioButtonGroup state={pckgManager}>
        <CheckboxButton id="--use-npm">NPM</CheckboxButton>
        <CheckboxButton id="--use-pnpm">PNPM</CheckboxButton>
        <CheckboxButton id="--use-yarn">Yarn</CheckboxButton>
        <CheckboxButton id="--use-bun">Bun</CheckboxButton>
      </RadioButtonGroup>

      <Text className="pt-5">Would you like to use TypeScript? </Text>
      <RadioButtonGroup state={lang}>
        <CheckboxButton id="--ts">Typescript</CheckboxButton>
        <CheckboxButton id="--js">Javascript</CheckboxButton>
      </RadioButtonGroup>
      <>
        <Text className="pt-5">Options</Text>
        <div className="flex gap-1 flex-wrap">
          <CheckboxButton
            checked={options['--tailwind']}
            onClick={() => clickOption('--tailwind')}
          >
            Tailwind
          </CheckboxButton>
          <CheckboxButton
            checked={options['--eslint']}
            onClick={() => clickOption('--eslint')}
          >
            Eslint
          </CheckboxButton>
          <CheckboxButton
            checked={options['--app']}
            onClick={() => clickOption('--app')}
          >
            App Router
          </CheckboxButton>
          <CheckboxButton
            checked={options['--src-dir']}
            onClick={() => clickOption('--src-dir')}
          >
            Use /src directory
          </CheckboxButton>
          <CheckboxButton
            checked={options['--import-alias']}
            onClick={() => clickOption('--import-alias')}
          >
            Specify import alias to use
            <TextField.Input
              value={importAlias}
              onChange={(e) => {
                setImportAlias(e.currentTarget.value);
              }}
              size="1"
              className="max-w-[100px]"
              placeholder="@/*"
            />
          </CheckboxButton>
        </div>
      </>
    </div>
  );
}
