<template>
    <div class="w-full">
        <form action="https://api.staticforms.xyz/submit" method="POST" class="flex flex-col gap-4 w-full">
            <!-- StaticForms Required Fields -->
            <input type="hidden" name="accessKey" value="7ed3cdf4-1dea-4837-ab06-02ed5d28a660" />
            <input type="hidden" name="redirectTo" value="https://justvaliant.fi/thank-you" />
            <input type="hidden" name="replyTo" value="$email" />

            <!-- Nimi -->
            <UFormField label="Nimi" required>
                <UInput name="name" color="neutral" variant="subtle" placeholder="Kirjoita nimesi"
                    class="w-full rounded-lg" size="xl" />
            </UFormField>

            <!-- Puhelinnumero -->
            <UFormField label="Puhelinnumero" required>
                <UInput name="phone" type="tel" color="neutral" variant="subtle" placeholder="Kirjoita puhelinnumerosi"
                    class="w-full rounded-lg" size="xl" />
            </UFormField>

            <!-- Sähköposti -->
            <UFormField label="Sähköposti" required>
                <UInput name="email" type="email" color="neutral" variant="subtle"
                    placeholder="Kirjoita sähköpostiosoitteesi" class="w-full rounded-lg" size="xl" />
            </UFormField>

            <!-- Dynamic Textarea Fields -->
            <UFormField v-for="field in textareaFields" :key="field.id" :label="field.label" :required="field.required">
                <UTextarea :name="`$${field.name}`" :placeholder="field.placeholder" color="neutral" variant="subtle"
                    class="w-full rounded-lg" :rows="field.rows" />
            </UFormField>

            <!-- Submit Button -->
            <UButton type="submit" value="Submit"
                class="w-full bg-[rgb(35,22,81)] text-white px-4 py-3 rounded-lg font-bold hover:bg-[rgb(29,30,44)] transition duration-200">
                Lähetä
            </UButton>
        </form>
    </div>
</template>

<script setup lang="ts">
const textareaFields = [
    {
        id: "family",
        name: "family",
        label: "Ketä perheeseesi kuuluu?",
        placeholder: "Kerro, ketä perheeseesi kuuluu",
        required: true,
        rows: 3,
    },
    {
        id: "age",
        name: "age",
        label: "Minkä ikäisiä olet/olette?",
        placeholder: "Kirjoita ikäsi/ikänne",
        required: true,
        rows: 3,
    },
    {
        id: "purpose",
        name: "purpose",
        label: "Onko koiran kanssa tarkoitus harrastaa vai tuleeko koirasta kotikoira?",
        placeholder: "Kerro, mitä suunnitelmia sinulla/teillä on koiran kanssa",
        required: true,
        rows: 3,
    },
    {
        id: "living",
        name: "living",
        label: "Missä ja miten asutte?",
        placeholder: "Kuvaile asuinpaikkasi ja asumistapasi",
        required: true,
        rows: 3,
    },
    {
        id: "pets",
        name: "pets",
        label: "Onko teillä muita lemmikkieläimiä?",
        placeholder: "Kerro muista mahdollisista lemmikkieläimistä",
        required: true,
        rows: 3,
    },
    {
        id: "experience",
        name: "experience",
        label: "Onko sinulla/teillä aikaisempaa koirakokemusta?",
        placeholder: "Kerro mahdollisesta aikaisemmasta koirakokemuksestasi",
        required: true,
        rows: 3,
    },
    {
        id: "preferences",
        name: "preferences",
        label: "Toivomuksia koiran suhteen?",
        placeholder: "Kerro, jos sinulla/teillä on erityisiä toiveita koiran suhteen",
        required: false,
        rows: 3,
    },
    {
        id: "other",
        name: "other",
        label: "Muuta",
        placeholder: "Lisää muuta, mitä haluaisit kertoa",
        required: false,
        rows: 3,
    },
];
</script>