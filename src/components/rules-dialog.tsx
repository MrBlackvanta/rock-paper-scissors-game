"use client";

import { CloseIcon } from "@/components/icons";
import { PICK_VISUALS } from "@/data";
import { BEATS, PICKS } from "@/lib/game";
import { useRef } from "react";

export default function RulesDialog({ diagram }: { diagram: React.ReactNode }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const panel = useRef<HTMLDivElement>(null);

  function open() {
    dialog.current?.showModal();
    panel.current?.focus();
  }

  return (
    <>
      <button
        type="button"
        onClick={open}
        className="mt-auto h-10 w-32 rounded-lg border border-white text-label tracking-label uppercase transition-colors hover:v-surface hover:text-ink motion-reduce:transition-none md:fixed md:right-8 md:bottom-8 md:mt-0"
      >
        Rules
      </button>

      <dialog
        ref={dialog}
        aria-labelledby="rules-title"
        onClick={({ target }) => {
          if (target === dialog.current) dialog.current?.close();
        }}
        className="fixed inset-0 m-0 hidden h-full max-h-none w-full max-w-none v-dialog overflow-y-auto bg-transparent p-0 backdrop:bg-black/50 open:flex"
      >
        <div
          ref={panel}
          tabIndex={-1}
          className="relative m-auto flex min-h-full w-full flex-col items-center bg-white px-8 pt-23.75 pb-12.75 text-ink outline-none md:min-h-0 md:w-100 md:rounded-lg md:pt-8 md:pb-11.75 md:shadow-raised"
        >
          <h2
            id="rules-title"
            className="text-modal-title font-bold uppercase md:self-start"
          >
            Rules
          </h2>

          <ul className="sr-only">
            {PICKS.flatMap((winner) =>
              BEATS[winner].map((loser) => (
                <li key={`${winner}-${loser}`}>
                  {PICK_VISUALS[winner].label} beats {PICK_VISUALS[loser].label}
                </li>
              )),
            )}
          </ul>

          <div className="mt-24 w-full max-w-84 md:mt-5">{diagram}</div>

          <button
            type="button"
            onClick={() => dialog.current?.close()}
            className="mt-auto grid size-12 place-items-center v-focus-ring-inverse text-ink/60 transition-colors hover:text-ink motion-reduce:transition-none md:absolute md:top-6 md:right-4.25 md:mt-0"
          >
            <span className="sr-only">Close rules</span>
            <CloseIcon className="size-5" />
          </button>
        </div>
      </dialog>
    </>
  );
}
