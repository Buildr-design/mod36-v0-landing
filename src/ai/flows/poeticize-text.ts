'use server';

/**
 * @fileOverview Rewrites text in a poetic style using an LLM.
 *
 * - poeticizeText - A function that rewrites text into a poetic style.
 * - PoeticizeTextInput - The input type for the poeticizeText function.
 * - PoeticizeTextOutput - The return type for the poeticizeText function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PoeticizeTextInputSchema = z.object({
  text: z.string().describe('The text to rewrite in a poetic style.'),
});
export type PoeticizeTextInput = z.infer<typeof PoeticizeTextInputSchema>;

const PoeticizeTextOutputSchema = z.object({
  poeticText: z.string().describe('The text rewritten in a poetic style.'),
});
export type PoeticizeTextOutput = z.infer<typeof PoeticizeTextOutputSchema>;

export async function poeticizeText(input: PoeticizeTextInput): Promise<PoeticizeTextOutput> {
  return poeticizeTextFlow(input);
}

const prompt = ai.definePrompt({
  name: 'poeticizeTextPrompt',
  input: {schema: PoeticizeTextInputSchema},
  output: {schema: PoeticizeTextOutputSchema},
  prompt: `Rewrite the following text in a poetic and artistic style, using evocative language and imagery. Maintain the original text's core meaning and intent, but feel free to reorder words and phrases to enhance the poetic effect. Consider different poetic devices, such as metaphor, simile, alliteration, and assonance, to enrich the text. The goal is to transform the text into a more artistic and engaging piece.

Original Text: {{{text}}}`,
});

const poeticizeTextFlow = ai.defineFlow(
  {
    name: 'poeticizeTextFlow',
    inputSchema: PoeticizeTextInputSchema,
    outputSchema: PoeticizeTextOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
